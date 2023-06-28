const {createApp} = Vue
createApp({
    data(){
        return{        
            title : '',
            content : '',
            notes : [],
            //select : false,
            textrows:25,
        };
    },
    mounted(){
        if(localStorage.getItem('Notes')){
            this.notes = JSON.parse(localStorage.getItem('Notes'))
        };
    },
    methods:{
        createnote(){
            this.title='';
            this.content='';
            //this.selectindex=null;
            this.noteactive(null);
        },
        updatenote(){
            const note={
                title : this.title,
                content : this.content,
            };
            if(this.notes.length == 0){
                this.notes.push(note);
            }else{
                const existnote = this.notes.find(n => n.title === note.title)
                if(existnote){
                    //alert("目前已有相同的筆記名稱，請勿重複!");
                    existnote.content = note.content;
                    const index = this.notes.indexOf(existnote);
                    this.noteactive(index);
                }else{
                    this.notes.push(note);
                    const index=this.notes.length-1;
                    this.noteactive(index);
                }
            }
            localStorage.setItem('Notes',JSON.stringify(this.notes));
        },
        adjustext(){
            const textarea=document.querySelector("textarea");
            textarea.style.height="auto";
            textarea.style.height=textarea.scrollHeight+'px';
            this.textrows=textarea.rows;
        },
        delbtn(index){
            this.notes.splice(index,1);
            this.createnote();
            localStorage.setItem('Notes',JSON.stringify(this.notes));
        },
        selectnote(index){
            //this.selectindex=True;
            this.title=this.notes[index].title;
            this.content=this.notes[index].content;
            this.noteactive(index);
        },
        noteactive(index){
            const preactive = document.querySelector('.bookmark li.active');
            if (preactive) {
                preactive.classList.remove('active');
            }

            if(index !== null){
                const noteitem = document.querySelectorAll('.bookmark li')[index];
                noteitem.classList.add('active');
            }
        }
    },
}).mount('#app');