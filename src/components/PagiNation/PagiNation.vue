<template>
    <div class="pagination">
        <button :disabled = "pageNo === 1" @click="$emit('getPageNo',pageNo - 1)">上一页</button>
        <button v-show="startAndendNum.start != 1">1</button>
        
        <button v-show="startAndendNum.start >2">···</button>

        <button 
        v-for="(item,index) in startAndendNum.end" 
        :key="index" 
        v-show="item >=startAndendNum.start "
        @click="$emit('getPageNo',item)"
        >{{ item}}</button>

        <button v-if="startAndendNum.end < totalPage -1">···</button>
        <button v-if="startAndendNum.end <totalPage">{{totalPage}}</button>
        <button :disabled = "pageNo === total" @click="$emit('getPageNo',pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "PagiNation",
        props:["pageNo","pageSize","total","continues"],
        computed:{
           totalPage(){
            return Math.ceil(this.total / this.pageSize)
           },
          startAndendNum(){ //分页器的逻辑
           const { pageNo, continues, totalPage } = this;
            // 1:声明起始变量
                let start = 0;
                let end = 0;
          //2 :情况一:如果连续页码数是5 总页码数 是3, 
               if(continues > totalPage){
                start = 1
                end = totalPage
               }else{
                //就是连续页码 < 总页码数  比如 5 < 10
                start = pageNo - parseInt(continues / 2)
                end = pageNo + parseInt(continues / 2)
                if(start < 1){
                    //但是上面的情况会出现极端情况, 
                    //start = pageNo - parseInt(continues / 2)
                    // 如果pageNo=1,continues = 5 计算出的start会为负数
                   start = 1
                   end = continues;
                }
                //end的情况 end = pageNo + parseInt(continues / 2) 
                //比如1 2 3 4 5 6 当前页pageNo是5,continues为5 总页码数为6
                //计算出来的end > totalPage
                if(end >totalPage){
                    end =totalPage
                    start = totalPage - continues + 1
                }

               }
               return {start,end}
        }
       }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>