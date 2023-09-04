class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(data){
        // create node
        const newnode=new Node(data);
        //initialization of head and tail
        this.head=newnode;
        this.tail=newnode;
        // initialize length
        this.length=1;
    }
    push(value){
        const newNode=new Node(value);
        //
        if(!this.length){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.length)return undefined;
        //
        if(this.length==1){
            let temp=this.head;
            this.head=null;
            this.tail=null;
            this.length--;
            return temp;
        }
        else{
            let temp=this.head;
            let prev=this.head;
            while(temp.next){
                prev=temp;
                temp=temp.next;
            }
            this.tail=prev;
            this.tail.next=null;
            this.length--;
            return temp;
        }
    }
    unshift(value){
        const newNode=new Node(value);
        if(!this.length){
            this.head=newNode;
            this.tail=this.head
        }
    } 

   
}
const sl=new LinkedList(10);
console.log(sl);
sl.push(11);
console.log(sl);