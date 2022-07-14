<template>
  <div id="app">
      <div class="kiri">
            <div class="logo">
                  <a href="http://" target="_blank">
                    <h2>defadels</h2>
                    <span>Notes</span>
                  </a>
            </div>
            <div class="frame-notes">
                  <button class="btn bg-success btn-new-note" @click="newNote">+ Note Baru</button>
                  <ListNotes :propNotes="notes" :propEditNote="editNote"/>
            </div>
    </div>

    <div class="kanan">
    <FormNotes :propSaveNote="saveNote"  :propUpdateNote="updateNote" :propDataForm="dataForm"/>
    </div>
  </div>
</template>

<script>
import ListNotes from './components/listNotes.vue'
import FormNotes from './components/formNotes.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    ListNotes,
    FormNotes
  },
  data: function() {
     return {
          dataForm: {},
          notes: [{title: 'wegodev', description: 'ini catatan', id: 1}, {title: 'wegodev 2', description: 'catatan 2', id: 2}]
     }
  },
  methods: {
     // mengosongkan value pada form notes
     newNote() {
       this.dataForm = {id: 0, title : '', description: ''}   
     },
     // lakukan save note dengan push index baru pada array
     saveNote(title, description){
          let newId = 0;
          
          if(this.notes.length === 0){
               newId = 1;
          } else {
               newId = this.notes[this.notes.length - 1].id + 1;
          }

          let newNote = {id : newId, 'title' : title, 'description' : description}

          this.notes.push(newNote);
     },
     // lakukan update note berdasarkan id note
     updateNote(id, title, description){

          // mengakses object dalam array dengan cara mencari index berdasarkan id yg dipilih
          let noteIndex = this.notes.findIndex(note => note.id === id);


          // mengganti nilai pada object dengan yang baru diinput / diganti oleh user dalam form
          this.notes[noteIndex].title = title;
          this.notes[noteIndex].description = description;
     },
     editNote(id){
          // console.log("App.vue");
          this.dataForm = this.notes.find(note => note.id === id);

          // console.log(this.dataForm);
     },
  }
}
</script>
 
<style>
body{
     margin:0px;
     overflow:hidden;
}
#app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     color: #2c3e50;
     padding:0px;

     display:flex;
     width:100%;
}

.kiri{
     width: 400px;
     background: #f7f7f7;
     color: #616161;
}
.logo{
     padding: 25px 15px;
     border-bottom: 1px solid gainsboro;
}
.logo a{
     text-decoration:none;
}
.logo a h2{
     margin: 0px;
     display: inline;
     margin-right: 5px;
     font-size: 35px;
     text-transform: capitalize;
     color: #757575;
}
.logo a span{
     font-size: 12px;
     letter-spacing: 1px;
     text-transform: uppercase;
     color:#139e5f;
}
.frame-notes{
     overflow-y: scroll;
     overflow-x: hidden;
     height: 85vh;
}
.bg-success{
     background: #219a63;
     color: white;
     outline:none;
}
.bg-success:hover{
     background:#24b774;
     color: white;
}
.bg-danger{
     background:#b50000;
     color: white;
}
.bg-danger:hover{
     background:#c50000;
}
.btn{
     border: none;
     font-size: 12px;
     text-align: center;
     letter-spacing: 1px;
     cursor: pointer;
     border-radius: 2px;
     padding: 7px 25px;
     outline:none;
}
.btn-new-note{
     width: 90%;
     padding: 12px 10px;
     margin: 10px 15px;
     text-align: left !important;
}

.kanan{
     width: 100%;
     overflow-y: scroll;
     height: 100vh;
     border-left: 1px solid gainsboro;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f7f7f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
