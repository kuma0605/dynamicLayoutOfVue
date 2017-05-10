<template>
    <div class="echartsInstance" :style="styleObject"></div>
</template>
<style lang="less">

</style>
<script>
    import echarts from 'echarts';

    import china from './../data/china.json';
    
    echarts.registerMap('china', china);

    export default {
        props:{
            option: {
                type: Object,
                default: undefined
            },
            chartClass:{
                type: String,
                default: undefined
            },
            chartStyle:{
                type: Object,
                default: undefined
            },
            clickEnable:{
                type: Boolean,
                default: false
            }
        },
        data:function(){
            return {
                myChart:undefined,
                defaultStyle:{
                    width:'100%',
                    height:'300px'
                },
                noHeight:{
                    width:'100%',
                    height:'10px'
                }
            }
        },
        created(){
            
        },
        ready() {
            if(this.option){
                this.initChart();
            }
        },
        methods:{
            initChart(){

                var myChart = echarts.init(this.$el);

                this.myChart=myChart;

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(this.option);

                if(this.clickEnable){
                    myChart.on('click', (params)=>{
                        this.$emit('outer-event',params);
                    });
                }
                
                setTimeout(()=>{
                    myChart.resize();
                },100);
                window.onresize=()=>{
                    myChart.resize();
                };
            }
        },
        watch:{
            option:{
                handler(val, oldVal){
                    if(this.myChart){
                        this.myChart.clear();
                        if(val){
                            this.myChart.setOption(val);
                        }
                    }else{

                        this.initChart();
                    }
                },
                deep: true
            }
        },
        computed:{
            styleObject(){
                return this.chartStyle?this.chartStyle:(this.option?this.defaultStyle:this.noHeight);
            }
        }
    }
</script>
