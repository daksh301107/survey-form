class Form {
  constructor() {
    
    
    this.input = createInput('Name');
    this.button = createButton('Play');
    this.radio=createRadio();
    this.radio1=createRadio();
    this.radio2=createRadio();
    this.radio3=createButton("go");
    this.greeting = createElement('h3');
    this.greeting1= createElement('h3');
    this.greeting2= createElement('h3'); 
  }
  hide(){
    this.input.hide();
    this.greeting.hide();
    this.button.hide();
    
    
  }
  display(){
    var title = createElement('h2')
    title.html("Survey Form");
    title.position(130, 0);
    
   this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      player.update(name)
      
      
      this.greeting.html("Q1. Do you need free lunch meals in school?");
      this.greeting.position(40, 90)
    // radio = createRadio();
     this.radio.option('yes');
     this.radio.option('no');
     this.radio.position(50,130);
     //val=this.radio.value();
     //text(val, 60,290);



     this.greeting1.html("Q2. Would you like to donate money to school?");
      this.greeting1.position(40, 140)
    // radio = createRadio();
     this.radio1.option('yes');
     this.radio1.option('no');
     this.radio1.position(50,200);

     
     this.greeting2.html("Q3. . How much per month would you be willing to pay?");
     this.greeting2.position(20, 230)
   // radio = createRadio();
    this.radio2.option('yes');
    this.radio2.option('no');
    this.radio2.position(50,270);

this.radio3.position(370,390);
  

    });

  }
}
