const { createApp } = Vue
createApp({
	data(){
  	return{
    	page:'事件',
        show:false,
        showaddevent:false,
        showmbinfo:false,
        allmember : [],
        name : '',
        arrears:0,
        event : '',
        price : null,
        paymb:'',
        allevent:[],
        alleventcopy:[],
        allmembercopy:[],
    };
  },
  methods:{
  	showpage(pages){
    	this.page =pages;
    },
    showmodal(){
        this.show=!this.show;
        this.showaddevent=!this.showaddevent;
    },
    showinfo(index){
        this.selectedEventIndex = index;
        this.show=!this.show;
        this.showmbinfo =! this.showmbinfo;
    },
    additem(){
        const parsedprice = Number(this.price);
        const singleevent={
            event : this.event,
            price : parsedprice,
            paymb : [],
            joinmb : []
        }
        if(this.event !=="" && parsedprice!== null && parsedprice>0 && this.paymb!=="" && this.joinmb!==""){
            
            const account = Math.round(parsedprice / (this.joinmb.length+1));

            const paymbprice = {
                payname : this.paymb,
                price: account,
            }
            singleevent.paymb.push(paymbprice);
            

            /*this.joinmb.forEach(person => {
                singleevent.joinmb.push({
                    name: person,
                    price: account
                });
            });*/
            for(let i=0; i < this.joinmb.length ; i++){
                const persondata={
                    name : this.joinmb[i],
                    price : account,
                };
                singleevent.joinmb.push(persondata);
            }
            
            for (let i = 0; i < this.allmember.length; i++) {
                let memberTotal = this.allmember[i].arrears;
                
                //付款人
                if (this.allmember[i].name === this.paymb) {
                    memberTotal += (account*this.joinmb.length);
                }
            
                //參與人
                if (this.joinmb.includes(this.allmember[i].name)) {
                    memberTotal -= account;
                }
                this.allmember[i].arrears = memberTotal;
            }

            this.allevent.push(singleevent);
            this.showmodal();
            this.clearmodal();
            localStorage.setItem('updatevent',JSON.stringify(this.allevent));
            localStorage.setItem('updatemember',JSON.stringify(this.allmember));
        }else{
            alert("不能有空白!");
        }
    },
    clearmodal(){
        this.event =""; 
        this.price = null; 
        this.paymb =""; 
        this.joinmb ="";
    },
    addmember(){
        const member ={
            name : this.name,
            arrears : 0,
        };
        if(this.name != ""){
            this.allmember.push(member);
            this.name="";
            localStorage.setItem('updatemember',JSON.stringify(this.allmember));
        }else{
            alert("輸入成員名稱");
        }
        
    },
    delmember(index){
        if(this.allmember[index] !== this.allmembercopy[index]){
            this.allmember.splice(index,1);
            localStorage.setItem('updatemember',JSON.stringify(this.allmember));
        }
    },
    delevent(index){
        if(this.allevent[index] !== this.alleventcopy[index]){
            this.allevent.splice(index,1);
            localStorage.setItem('updatevent',JSON.stringify(this.allevent));
        }
    }
  },
  mounted(){
    this.alleventcopy=[...this.allevent];
    this.allmembercopy=[...this.allmember];
    if(localStorage.getItem('updatevent') || localStorage.getItem('updatemember')){
        this.allevent=JSON.parse(localStorage.getItem('updatevent'));
        this.allmember=JSON.parse(localStorage.getItem('updatemember'));
    }
    
  }
  
}).mount('#app');