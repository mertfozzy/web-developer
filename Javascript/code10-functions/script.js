var accountMert = {
    name : "Mert Altuntaş",
    account_id : "123456",
    remainder : 2500,
    additional_remain : 2000,
}

var accountSerra = {
    name : "Serra Yıldız",
    account_id : "654321",
    remainder : 2000,
    additional_remain : 3000,
}

function takeMoney(account) {
    let amount = prompt(`Hello ${account.name}.\nHow much do you want to take : `);

    if (amount <= account.remainder) {
        remain_money = account.remainder - amount;
        account.remainder -= remain_money;
        promt(`You take : ${amount}, remainder is : ${remain_money}`);
    }
    else if (amount > account.remainder && (account.remainder+account.additional_remain)>amount ) {
        decision = confirm(`Your remainder (${account.remainder}) is not enough.Do you want to use additional remainder (${account.additional_remain}) ?`);

        if (decision == true) {
            remain_money = (account.remainder + account.additional_remain) - amount;
            account.remainder = remain_money;
            prompt(`You can take ${amount} and your new remainder is ${account.remainder}.`);
            console.log(account);
        }
        else
        {
            promt("Operation cancelled.");
        }

    }
    else{
        promt(`You cannot take ${amount}. Your total money is ${account.remainder + account.additional_remain}.`);
    }
}


let user = prompt("Please enter your name to access your account : ");

if (user == "Mert") {
    takeMoney(accountMert);
}
else if (user == "Serra") {
    takeMoney(accountSerra);
}
else{
    console.log("User not found.");
}