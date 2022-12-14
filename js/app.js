dayjs.extend(window.dayjs_plugin_customParseFormat);

contacts = [
    {
        name: 'Michele',
        avatar: './assets/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 09:21:00',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './assets/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 11:03:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './assets/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './assets/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 22:58:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './assets/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 17:48:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './assets/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 14:21:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './assets/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 19:47:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './assets/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 01:47:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    },
];


const app = new Vue({
    el: '#app',
    data: {
        contacts,
        active: 0,
        newMessage: '',
        contactName: '',
    },
    computed: {
        getMessages(){
            return this.contacts[this.active].messages;
        },
    },
    methods: {
        selectContact(indice){
            this.active = indice;
        },
        sendMessage(){
            const clearSpace = this.newMessage.trim();
            if(clearSpace === '') return;
            this.getMessages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: clearSpace,
                status: 'sent',
            });
            this.newMessage = '';
            setTimeout(this.autoReply, 1000);
        },
        autoReply(){
            this.getMessages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: 'Ok',
                status: 'received',
            });
        },
        findContact(name){
            this.contacts.forEach(element => {
                let userName = element.name.toLowerCase();
                userName.includes(name) ? element.visible = true : element.visible = false;
            });
        },
        getLastMessage(el){
            let lastMsg;
            lastMsg = el[el.length - 1].message;
            return lastMsg;
        },
        getDate(el){
            let lastDate;
            lastDate = el[el.length -1].date;           
            return dayjs(lastDate, 'DD/MM/YY hh:mm:ss')
        },
        getHour(el){
            return dayjs(el, 'DD/MM/YY hh:mm:ss').format('mm:ss');
        }
    },
});