const { createApp } = Vue;

createApp({
    data(){
        return{
            timer : null,
            start : null,
            current : 0,
            running : false,
            list : [],
        };
    },
    computed:{
        formatTime(){
            const h = Math.floor( (this.current / (1000*60*60) ) % 24);
            const m = Math.floor( (this.current / (1000*60) ) % 60);
            const s = Math.floor((this.current/1000) % 60);
            const ms = Math.floor(this.current % 1000);
            nowtime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
            return nowtime;
        }
    },
    methods:{
        startbtn(){
            if (!this.running) {
                const now = Date.now();
                this.start = now - this.current;
                this.timer = setInterval(() => {
                    const current = Date.now() - this.start;
                    this.current = current;
                }, 1);
                this.running = true;
            }
        },
        stopbtn(){
            if (this.running) {
                clearInterval(this.timer);
                this.running = false;
            }
        },
        resetbtn(){
            clearInterval(this.timer);
            this.stopbtn();
            this.start = null;
            this.current = 0;
            this.running = false;
            this.list =[];
        },
        pushbtn(){
            this.list.push({
                laptime: this.formatTime
            });
        }
    }
}).mount('#app');