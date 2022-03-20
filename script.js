//creates a a book object
function Book(title, author, pages, status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//start
let myLibrary = [];
myLibrary[0] = new Book("The Great Gatsby", "F. Scott Fitzgerald", 152, "read");
myLibrary[1] = new Book("To Kill a Mockingbird", "Harper Lee", 281, "unead");
console.table(myLibrary);

//listens for button click of NEW BOOK addition to library
let btn = document.getElementById('newBook');
form.style.visibility='hidden';
btn.addEventListener('click' , e => {
    const form = document.getElementById('form');
    if(form.style.visibility==='hidden')
    {
        form.style.visibility='visible';
        btn.style.visibility='hidden';
    }
    
});

//call display function
let Sno = 1;
let bookCount = 0;
display();

//display's the books in library
function display(){
    let datr = [];
    for(let i=bookCount;i<=myLibrary.length-1;i++)
    {
        datr[i] = document.createElement('tr');
        datr[i].setAttribute('id', i);
        document.getElementById('table-body').appendChild(datr[i]);
        let datd = [];
        for(let j=0;j<5;j++)
        {
            datd[j] = document.createElement('td');
            //display's serial number
            if(j==0)
            {
                datd[j].innerText = Sno;
                Sno++;
            }
            //display's data from object array
            else
            {
                switch(j-1)
                {
                    case 0:
                        datd[j].innerText = myLibrary[i].title;
                        console.log(datd[j]);
                        break;
                    case 1:
                        datd[j].innerText = myLibrary[i].author;
                        console.log(datd[j]);
                        break;
                    case 2:
                        datd[j].innerText = myLibrary[i].pages;
                        console.log(datd[j]);
                        break;
                    case 3:
                        datd[j].innerText = myLibrary[i].status;
                        console.log(datd[j]);
                        break;
                }
            }
            document.getElementById(i).appendChild(datd[j]);
        }
        bookCount++;
    }
}

//fuction to add a book to library
let submit = document.getElementById('filled');
submit.addEventListener('click' , e => {
    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;

    //checks the radio button
    let radio = document.getElementsByName('choice');
    let newStatus = "";
    for(let k=0;k<radio.length;k++)
    {
        if(radio[k].checked)
        {
            newStatus = radio[k].value;
        }
    }

    //data add to object
    myLibrary[bookCount] = new Book(newTitle, newAuthor, newPages, newStatus);
    console.table(myLibrary);
    bookCount++;

    //option to add next book
    document.getElementById('form').reset();
    form.style.visibility='hidden';
    btn.style.visibility='visible';

});
