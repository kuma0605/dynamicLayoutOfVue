<template>
	<ul class='tabList'>
		<router-link v-if='linkActive' :to='item.link' tag="li"  v-for='item in tabData' @click='clickTab(item)' active-class='activeTab'>
			{{item.text}}
		</router-link >
		<li v-if='!linkActive' v-for='item in tabData' @click='clickTab(item)' :class="{'activeTab':item.tabType==tabActived}">
			{{item.text}}
		</li>
	</ul>
</template>
<script>
	export default {
		props:{
			tabData:{
				type: Array,
				default: []
			},
			tabInit:{
				type: String
			}
		},
		data (){
			return {
				
			}
		},
		methods:{
			clickTab(item){
				this.tabActived=item.tabType;
				this.$emit('tab-change', item.tabType);
			}
		},
		computed:{
			linkActive(){
				return this.tabData.some(function(item){
					return item.link
				});
			},
			tabActived(){
				return this.tabInit;
			}
		}
	}
</script>
<style scoped lang='less'>
	@commonBorderColor:#bce8f1;
	@commonBgColor:#d9edf7;
	@tableRowHoverBgColor:#BBDEFB;

	.tabList{
      border-bottom: 3px solid #1d90e6;
      li{
        color:#555;
        cursor: pointer;
        display: inline-block;
        border:1px solid @commonBorderColor;
        /*border-top-left-radius:5px;
        border-top-right-radius:5px;*/
        border-bottom: none;
        background: @commonBgColor;
        padding:10px 15px;
        &:not(:last-of-type){
          margin-right:10px;
        }
        &:not(.activeTab):hover{
          background-color:@tableRowHoverBgColor;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          border:1px solid @commonBorderColor;
          border-bottom: none;
          color:#555;
        }
        a{
        	text-decoration: none;
    		color: inherit;
        }
      }
      .activeTab{
        background: #1d90e6;
        color:white;
        border:1px solid #1d90e6;
        border-bottom: none;
      }
  }
</style>