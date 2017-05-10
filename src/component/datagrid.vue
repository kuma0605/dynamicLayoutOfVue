<template>
	<div>
	    <el-pagination v-if='pageDisplay'
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-size="limit"
	      layout="total, prev, pager, next, jumper"
	      :total="itemCount"
	      >
		</el-pagination>
		<!-- <el-table
	      :data="tableData"
	      border
	      :row-class-name="tableRowClassName"
	      v-if='!selectionMode'
	      > -->
	    <el-table
	      :data="tableData"
	      border
	      :row-class-name="tableRowClassName"
	    
	      @selection-change="handleSelectionChange"

	      :highlight-current-row='singleSelection'

	      @current-change='handleSingleSelection'

	      >
	      	<el-table-column v-if='selectionMode'
		      type="selection"
		      width="55" 
		      fixed
		      >
		    </el-table-column>
		    <el-table-column
	      		fixed
		      	type="index"
		      	width="58" 
		      	fixed
		      	>
		    </el-table-column>
	      	<slot></slot>
	    </el-table>
	    <el-pagination v-if='pageDisplay'
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-size="limit"
	      layout="total, prev, pager, next, jumper"
	      :total="itemCount">
	    </el-pagination>
	</div>
</template>
<style >
	
</style>
<script>
	export default {
		props:{
			url:{
				type:String,
				default:''
			},
			params: {
				type:Object,
				default(){
					return {}
				}
			},
			data:{
				type:Array,
				default(){
					return []
				}
			},
			limit: {
		        type: Number,
		        default: 10
		    },
		    selectionMode: {
		    	type: Boolean,
		        default: false
		    },
	      	pageDisplay: {
	        	type: Boolean,
	        	default: true
	      	},
	      	outerFilter:{
		        type: Function,
		        default:(input)=>input
		    },
		    emitFilter:{
		        type: Object,
		        default (){
		          return {}
		        }
		    },
		    selection:{
		        type: Array,
		        default (){
		          return []
		        }
		    },
		    rowClass:{
		    	type: Function,
		    	default:()=>''
		    },
		    singleSelection:{
		    	type:Boolean,
		    	default:false
		    }
		},
		data() {
	      return {
	        currentPage: 1,
	        tableData:[],
	        itemCount:0
	      };
	    },
	    watch: {
	      params(newVal) {
	        if(!this.url) return;
	        this.getData();
	      }
  		},
	    created(){
	    	if(this.data.length){
	    		this.tableData=this.data;
	    	}
	    },

	    methods: {
	      	handleCurrentChange(val) {
	        	this.currentPage = val;
	        	this.getData();
	      	},
	      	getData(){
	      		//为什么用JSON.parse转一遍，可以过滤掉值为undefined的属性
		        var params = this.params ? JSON.parse(JSON.stringify(this.params)) : {};
		        params.offset = this.currentPage ? (this.currentPage - 1) * this.limit : 0;
		        params.limit = this.limit;
		        this.$http.get(this.url, {params}).then((res) => {
		          var data = res.data;

		          if (data) {
		            if(data.code < 400){

		              this.tableData = Object.is(data.objects,null)?[]:data.objects;
					  this.tableData = this.outerFilter(this.tableData);
		              this.itemCount = data.count||0;

		              this.dataBackUp=this.data;

		            }else {
		              	this.$message({
				          	message: data.msg,
				          	type: 'warning',
				          	duration: 1500
				          // showClose: true
				        });
		            }
		          } else this.itemCount = 0;
		        });
		   	},
		   	tableRowClassName(row,index){
		   		return this.rowClass(row,index)
		   	},
		   	handleSelectionChange(val){
		   		this.$emit('selection-change', val)
		   	},
		   	handleSingleSelection(val){
		   		this.$emit('current-change', val)
		   	}
	    }
	}
</script>