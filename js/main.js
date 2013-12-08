var gotMail = gotMail || {};

gotMail = {
  init: function(){
    this.showMailboxAnimation();
  },
  showMailboxAnimation : function(){
    var 
      mailboxContainer = document.querySelector('.container'),
      timeOut = setTimeout(function(){
        mailboxContainer.classList.add('got-mail');
        clearTimeout(timeOut);
      }, 500);
  }
};

(function(){
  gotMail.init();
})();