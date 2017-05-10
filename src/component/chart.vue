<template>
    <div>
        <div id="highchartContainer" style="height: 300px"></div>
        <input type="button" id='plotDataButton' @click="showPlotData" v-show="false" />
    </div>
</template>
<script>

    import $ from "jquery";
    import Highcharts from "highcharts";

    export default {
        props: {
            url: '',
            title: {
                default: ''
            },
			plots: {
                default() {
					return [];
                }
            },
			columns: {
                default(){
                    return [];
                },
            },
			templates: {
                default(){
                    return {};
                }
			}
        },
        methods: {
            getSeriesData() {
                this.plotData = [];
                this.plotName = "";
                this.opts.title.text = this.title;
                this.opts.series[0].data=[];
                this.$http.get(this.url).then((res) => {
                    if(res.data.code <300){
                        this.data = res.data.object;
				        for(var i=0; i<this.plots.length; i++) {
				        	var data = {};
                            data.name = this.plots[i].name;
                            data.y = this.data[this.plots[i].property]?this.data[this.plots[i].property].length:0;
                            this.opts.series[0].data.push(data);
                        }
                    }else{
                        this.$msgbox({
                            title: "失败",
                            message: "获取数据失败"
                        })
                    }
                    this.chart = new Highcharts.Chart(this.opts);
                }); 
            },
			showPlotData(event){
                this.plotName = event.target.value;
                for(var i=0; i<this.plots.length; i++) {
					if (this.plots[i].name ==this.plotName) {
                        this.plotData = this.data[this.plots[i].property]?this.data[this.plots[i].property]:[];
                    }
                }
                this.$emit('get-table-data',this.plotData);
            }
        },
        data: function() {
            return {
                opts: {
                    chart: {
                        renderTo: 'highchartContainer',
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            events: {  
                                click: function(e) {
                                    document.getElementById('plotDataButton').value = e.point.name;
                                    document.getElementById('plotDataButton').click();
				                }  
                            }, 
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: 'black'
                                }
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Percent',
                        colorByPoint: true,
                        data: []
                    }]
                },
				data:{},
                plotData:[],
                plotName: ""
            }
        },
        mounted() {
            // this.$nextTick(function() {
                this.getSeriesData();
            // })
        },
        watch: {
            url(val){
                this.getSeriesData();
            }
        }

    }
</script>
<style scoped>
    .plotData {
      margin-top: 20px;
    }
	.right{
        float:right;
	}
</style>
