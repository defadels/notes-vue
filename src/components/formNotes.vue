<template>
<div>
    <form @submit="submitNote" action="">
    <div class="menu">
        <button class="btn bg-danger btn-delete" type="button">Delete</button>
        <button class="btn bg-success" type="Submit">Save</button>
    </div>

    <div class="content">
        <input type="text" name="" id="" placeholder="Id" class="text" v-model="id">
        <input type="text" name="" id="" placeholder="Title" class="text" v-model="title">
        <textarea name="" class="text textarea" id="" placeholder="Tulis rencana kamu" v-model="description"></textarea>
    </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'formNotes',
    props: {
        propSaveNote: {
            type: Function
        },
        propDataForm: {
            type: Object
        },
        propUpdateNote: {
            type: Function
        },
    },
    data: function(){
        return {
            id : 0,
            title : '',
            description : ''
        }
    },
    methods: { 
        submitNote(e) {
            e.preventDefault();

            if(this.id === 0){

                this.propSaveNote(this.title, this.description)
            } else {
                this.propUpdateNote(this.id, this.title, this.description)
                
            }
        }
    },
    watch : {
        propDataForm: function(note){
            this.id = note.id;
            this.title = note.title;
            this.description = note.description;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
     background: #f7f7f7;
     padding:10px 25px;
     margin-bottom: 25px;
     text-align:right;
     border-bottom: 1px solid #e8e6e6;
}
.btn-delete{ margin-right:10px; }
.content{
     padding: 0px 25px;
}
.text{
     display: block;
     width: 100%;
     padding: 0px;
     font-size: 20px;
     font-weight: bold;
     color: #2c3e50;
     border: none;
     margin-bottom: 10px;
     box-sizing: border-box;
     outline: none;
}
.textarea{
     min-height: 350px;
     font-size: 15px;
     font-weight: lighter;
     line-height: 30px;
}
.loader{
     vertical-align: middle;
}
</style>