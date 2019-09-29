module.exports = {

    randomNumber: function(max,min=1){
      return (min>1) ? Math.floor(Math.random() * (max - min + 1) + min) : Math.floor((Math.random() * max) + min) -1
    }

}