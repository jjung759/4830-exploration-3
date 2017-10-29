Vue.component('result', {
  props: ['name'],
  template: '<div><span><strong>Hey there {{name}}, according to the survey, it looks like your mood warrants the following backing track</strong></span></div>'
})

var app = new Vue({
  el: '#app',
  data: {
      score: 0,
      username: "",
      frequency: [],
      inProgress: true,
      questions: [
      {text: "How dark is the room your in?", completed: false, count: 0, answers: [
        {text: "Pretty Dark", value: 1},
        {text: "Neutral", value: 2},
        {text: "Bright", value: 3}
      ]},
      {text: "How well did you sleep last night", completed: false, count: 1, answers: [
        {text: "Not well", value: 1},
        {text: "Fine", value: 2},
        {text: "Alright I guess", value: 3}
      ]},
      {text: "Select a fish:", completed: false, count: 2, answers: [
        {text: "Shark", value: 1},
        {text: "Tuna", value: 2},
        {text: "Clownfish", value: 3}
      ]},
      {text: "Which food would you eat?", completed: false, count: 3, answers: [
        {text: "No Food", value: 1},
        {text: "Lone French Fry", value: 2},
        {text: "Burger", value: 3}
      ]},
      {text: "Pick a location", completed: false, count: 4,answers: [
        {text: "Cave", value: 1},
        {text: "Library", value: 2},
        {text: "Beach", value: 3}
      ] }
    ]

  },
  computed: {
    totalDone: function(){
      k = this.questions.length;
      var counter = 0;
      for (i = 0; i < k; i++){
        if(this.questions[i].completed)
        counter = counter + 1;
      }
      return counter;
    },
    linkToDisplay: function(){
      x = 0;
      if(this.frequency.length > 0){

        len = this.frequency.length;
        var sum = 0;
        for (var j = 0; j < len; j++){
          sum += parseInt(this.frequency[j], 10);
        }
      x = sum/len;

      }
      console.log(x);
      return x;
    },
    chosenLink: function(){
      if (this.linkToDisplay==0){
        return "#";
      }
      else if(this.linkToDisplay < 1.4 && this.linkToDisplay > 0){
        return "https://www.youtube.com/embed/zGESP0iePmQ";
      }
      else if (this.linkToDisplay < 2.4 && this.linkToDisplay >1.4){
        return "https://www.youtube.com/embed/4dVvUogQVtM";
      }
      else {
        return "https://www.youtube.com/embed/vleyRSAuZtc"
      }
    }
  },
  methods: {
    updateScore: function(val, count){
      this.score += val;
      this.frequency.push(val);
      this.questions[count].completed=true;
      if (this.totalDone==5){
        this.inProgress = false;
      }
      console.log(this.frequency);
    }
  }
});
