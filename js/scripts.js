
function Database() {
  this.members = {};
  this.currentId = 0;
}

Database.prototype.addMember = function(member) {
  member.id = this.assignId();
  this.members[member.id] = member;
}

Database.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Database.prototype.findMember = function(id) {
  if (this.members[id] != undefined) {
    return this.members[id];
  }
  return false;
}

Database.prototype.deleteMember = function(id) {
  if (this.members[id] === undefined) {
    return false;
  }
  delete this.members[id];
  return true;
}

function Member(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

Member.prototype.deposit = function(userDeposit) {
  this.balance += userDeposit;
}

Member.prototype.withdrawl = function(userWithdrawl) {
  this.balance -= userWithdrawl;
}


let dataBase = new Database();

$(document).ready(function() {
  $("form#bank").submit(function(event) {
    event.preventDefault();

    const inputFirstName = $("input#userFirstName").val();
    const inputLastName = $("input#userLastName").val();
    const inputStart = parseInt($("input#startAmount").val());

    let newmember = new Member(inputFirstName, inputLastName,inputStart)
    

    dataBase.addMember(newmember)

    $(".register").hide()
    $(".withdraw").show()
    $(".deposit").show()
    
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();

    const userDeposit = parseInt($("input#depositAmount").val());
    dataBase.members[1].deposit(userDeposit);

    $(".balance").html("Your balance is " + dataBase.members[1].balance);
    $(".balance").show();
  });

  $("form#withdrawl").submit(function(event) {
    event.preventDefault();

    const userWithdrawl = parseInt($("input#withdrawAmount").val());
    dataBase.members[1].withdrawl(userWithdrawl);

    $(".balance").html("Your balance is " + dataBase.members[1].balance);
    $(".balance").show();
  });
});





