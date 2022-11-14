//Lorem Text

const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a condimentum elit. Quisque vel eros eu urna imperdiet hendrerit ut non nisl. In enim ex, cursus sed condimentum sit amet, faucibus non odio. Pellentesque nec lectus tortor. Donec mi dolor, hendrerit id magna at, tincidunt mollis mauris. Nunc elementum lorem id dui cursus, vitae tempus tortor tincidunt. Nulla facilisi. Phasellus ut laoreet est. Pellentesque auctor ipsum tristique, tincidunt neque et, congue massa. Morbi et nisi sem. In pulvinar nunc ut venenatis euismod.`,
  `In hac habitasse platea dictumst. In hac habitasse platea dictumst. In interdum scelerisque est. Proin posuere laoreet orci in dictum. Pellentesque a felis hendrerit, dignissim metus in, sodales erat. Aliquam metus mi, dapibus nec varius eget, fermentum sed arcu. Vestibulum fermentum suscipit varius. Nunc consequat tincidunt fringilla. Aenean bibendum elit feugiat, luctus nisl mollis, egestas nisi. Mauris dictum odio sollicitudin nibh sodales, et blandit metus dapibus. Etiam massa eros, auctor at lorem ultricies, tristique blandit ex. Pellentesque dictum eu odio quis ornare. Etiam at blandit orci.`,
  `Phasellus euismod volutpat elementum. Fusce mauris quam, cursus non ultrices nec, iaculis suscipit quam. Cras non est interdum, lobortis justo id, blandit sapien. Aenean luctus facilisis sagittis. Cras in commodo dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla vehicula consectetur. Vestibulum iaculis, lacus nec pretium consequat, erat dolor venenatis sapien, sed interdum quam augue et magna. Suspendisse euismod nisl in efficitur fringilla. Aenean ultricies justo ultricies nunc accumsan rutrum. Mauris venenatis, lorem a malesuada tristique, ante dui elementum erat, ac elementum urna dui sed odio. Vivamus at nulla metus. Curabitur bibendum cursus ante sit amet eleifend. Quisque scelerisque tortor quis tortor laoreet, et fermentum nisl congue.`,
  `Sed id eros eget dolor tincidunt tristique eget sed nulla. Quisque rhoncus eleifend magna, in congue ex aliquam nec. Proin eget diam a quam porta ullamcorper sit amet sed eros. Fusce posuere quam at elit hendrerit, et venenatis lorem tincidunt. Duis ut lacus in ante varius condimentum non nec elit. Mauris vitae dui vestibulum, accumsan leo quis, facilisis ipsum. Phasellus in lectus quis leo facilisis aliquet at eu purus. Etiam viverra purus elit, sit amet pellentesque sem vestibulum a. Ut diam libero, faucibus nec elit sed, maximus malesuada urna. Phasellus tincidunt fermentum purus eu pulvinar.`,
  `Nulla a eros et metus ullamcorper egestas sit amet eu velit. Ut fermentum placerat tortor, a ullamcorper turpis sollicitudin at. Suspendisse potenti. Proin vitae quam condimentum, rhoncus enim nec, fermentum purus. Nam porttitor pellentesque porttitor. Fusce dictum auctor elementum. Aenean pretium quam vitae quam varius, non laoreet libero ornare. Ut lacinia luctus urna sed tempor. Morbi consectetur sit amet ex non finibus. Pellentesque sed nisl vel eros congue accumsan semper ut massa. Curabitur laoreet, metus in consequat auctor, erat urna efficitur elit, non tincidunt erat magna vitae eros. Curabitur feugiat tortor eu purus mollis, in posuere magna tempus. Pellentesque in fermentum odio, aliquam blandit magna. Sed in ornare est. Vivamus lobortis posuere maximus.`,
  `Phasellus congue magna metus, ut vulputate nibh porta non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sagittis suscipit risus ac viverra. Suspendisse finibus nisl porttitor dictum fermentum. Duis elementum tortor at mi blandit tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed nulla dolor. Phasellus vulputate feugiat felis, quis volutpat orci commodo vel. Donec faucibus, erat eu ullamcorper rhoncus, libero ex consectetur tellus, ut lobortis dui mauris eu ipsum.`,
  `Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ipsum lacus, accumsan ac faucibus ac, facilisis quis sapien. Suspendisse volutpat sed urna in mattis. Mauris eu magna quis felis porta feugiat. Nullam nec efficitur tortor, in scelerisque mauris. Sed id nisi at diam blandit porta. Donec sodales tellus nec augue tempor aliquet.`,
  `In hac habitasse platea dictumst. Vivamus placerat arcu sed mauris porttitor, et faucibus leo elementum. Pellentesque ac quam ut nisi facilisis congue sed id libero. Donec at fringilla lorem, et fermentum ligula. Fusce at scelerisque libero. Aliquam vitae dapibus mi. Phasellus suscipit vulputate euismod. Aliquam ut sem sed tellus fermentum scelerisque id sit amet dui. Praesent at mattis neque.`,
  `Quisque eu magna ante. Nunc non tincidunt nibh. Proin metus massa, aliquam a nisi ac, mattis laoreet lectus. Donec dolor velit, euismod in lacus ut, fringilla sodales elit. Quisque sed leo eget sapien hendrerit fringilla. Vestibulum facilisis sapien sit amet laoreet blandit. Ut in quam sit amet ipsum pellentesque pharetra. Morbi vel ultrices nisl. In et mollis nunc.`,
  `Quisque mollis neque vel dui pulvinar, lacinia consequat diam vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam interdum mauris ut mollis imperdiet. Nunc pretium mauris id ullamcorper vehicula. Donec diam mauris, vestibulum ac iaculis vitae, blandit vel turpis. Integer ultrices leo in mauris iaculis, sit amet blandit ligula sagittis. Nunc ultrices laoreet lectus, eu faucibus nisl sodales a. Curabitur dolor sem, interdum et dignissim id, scelerisque vitae leo. Aenean ullamcorper, nibh eu vulputate eleifend, erat nunc cursus eros, vitae rutrum arcu sapien id mi. Nullam mollis vulputate tellus gravida efficitur. Ut ullamcorper mattis nunc dapibus viverra. Nam vel mauris quis magna sagittis scelerisque eu non nisl. Duis vel leo et elit posuere aliquet. Sed dapibus est in nulla pharetra molestie et ac odio. Proin sed enim leo. Etiam pharetra vel erat non finibus.`

];

//selecting items from the document
const form  = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

//adding an event listener
form.addEventListener('submit', function(e){
  //default behaviour of a form is to submit to a server
  //we need to prevent that
  e.preventDefault();
  //the input is a string, we need to convert it to an integer
  const value = parseInt(amount.value);
  //getting a random number to obtain a random paragraph from the array
  const random = Math.floor(Math.random()*text.length);
  
  //empty
  //-1
  //>10 
  if (isNaN(value) || value<=0 ||value>10){
    //grabs a random paragraph. Only displays one paragraph
    result.innerHTML = `<center><p class="result">${text[random]}</p></center>`;
  }else{
    //this grabs items from the array within that range
    let tempText = text.slice(0, value);
   //looping through the sliced array to obtain each paragraph and display them
    tempText = tempText.map(function(item){
      return `<center><p class="result">${item}</p></center>`
    })
    
    .join("");
    //join is used to combine the returned array into HTML text 
    
    result.innerHTML = tempText;
  }
})