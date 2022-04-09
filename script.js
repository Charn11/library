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

//listens for button click of ADD NEW BOOK addition to library
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
let datr = [];
display();

//display's the predefined books in library
function display(){
    for(let i=bookCount;i<=myLibrary.length-1;i++)
    {
        datr[i] = document.createElement('tr');
        datr[i].setAttribute('id', i);
        datr[i].setAttribute('data-row', i);
        datr[i].setAttribute('class','tr');
        document.getElementById('table-body').appendChild(datr[i]);
        let datd = [];
        for(let j=0;j<6;j++)
        {
            datd[j] = document.createElement('td');

            //display's serial number
            if(j==0)
            {
                datd[j].innerText = Sno;
                Sno++;
            }
            else if(j==5)
            {
                let deleteIcon = document.createElement('img');
                deleteIcon.setAttribute('src', 'img/icons8-delete.svg');
                deleteIcon.setAttribute('class', 'icon');
                datd[j].appendChild(deleteIcon);
            }
            //display's data from object array
            else
            {
                switch(j-1)
                {
                    case 0:
                        datd[j].innerText = myLibrary[i].title;
                        //console.log(datd[j]);
                        break;
                    case 1:
                        datd[j].innerText = myLibrary[i].author;
                        //console.log(datd[j]);
                        break;
                    case 2:
                        datd[j].innerText = myLibrary[i].pages;
                        //console.log(datd[j]);
                        break;
                    case 3:
                        datd[j].innerText = myLibrary[i].status;
                        //console.log(datd[j]);
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

    //display new book
    datr[bookCount] = document.createElement('tr');
    datr[bookCount].setAttribute('id', bookCount);
    datr[bookCount].setAttribute('data-row', bookCount);
    datr[bookCount].setAttribute('class','tr');
    document.getElementById('table-body').appendChild(datr[bookCount]);
    let datd = [];
        for(let j=0;j<6;j++)
        {
            datd[j] = document.createElement('td');

            //display's serial number
            if(j==0)
            {
                datd[j].innerText = Sno;
                Sno++;
            }
            else if(j==5)
            {
                let deleteIcon = document.createElement('img');
                deleteIcon.setAttribute('src', 'img/icons8-delete.svg');
                deleteIcon.setAttribute('class', 'icon');
                datd[j].appendChild(deleteIcon);
            }
            //display's data from object array
            else
            {
                switch(j-1)
                {
                    case 0:
                        datd[j].innerText = myLibrary[bookCount].title;
                        //console.log(datd[j]);
                        break;
                    case 1:
                        datd[j].innerText = myLibrary[bookCount].author;
                        //console.log(datd[j]);
                        break;
                    case 2:
                        datd[j].innerText = myLibrary[bookCount].pages;
                        //console.log(datd[j]);
                        break;
                    case 3:
                        datd[j].innerText = myLibrary[bookCount].status;
                        //console.log(datd[j]);
                        break;
                }
            }
            document.getElementById(bookCount).appendChild(datd[j]);
        }
    bookCount++;

    //option to add next book
    document.getElementById('form').reset();
    form.style.visibility='hidden';
    btn.style.visibility='visible';
    submit.disabled = true;

    //tooltip for delete icon
    let toolTip = document.querySelectorAll('.icon');
    let tool = document.getElementsByClassName('.icon');
    toolTip.forEach(tool => {
    tool.addEventListener('mouseover', e=> {
        tool.setAttribute('title', 'delete');
        });
    });

    
});

//form submit button validation
const checkTitle = document.getElementById('title');
const checkAuthor = document.getElementById('author');
const checkPages = document.getElementById('pages');
const checkRadio = document.getElementsByName('choice');
form.addEventListener('input', e => {
    if(checkTitle.value!=""&&checkAuthor.value!=""&&checkPages.value!="")
    {
        if(document.getElementById('read').checked==true||document.getElementById('unread').checked==true)
        submit.disabled = false;
    }
    else
    {
        submit.disabled = true;
    }
});

//to close add new book
const closeButton = document.getElementById('x');
closeButton.addEventListener('click', e => {
    const form = document.getElementById('form');
    if(form.style.visibility==='visible')
    {
        form.style.visibility='hidden';
        btn.style.visibility='visible';
    }
});

//tooltip for predfeined book delete icon
let toolTip = document.querySelectorAll('.icon');
let tool = document.getElementsByClassName('.icon');
toolTip.forEach(tool => {
    tool.addEventListener('mouseover', e=> {
        tool.setAttribute('title', 'delete');
    });
});

//delete predefined book on select
let deleteBook = document.querySelectorAll('.icon');
let deleteThis = document.getElementsByClassName('.icon');
deleteBook.forEach(deleteThis => {
    deleteThis.addEventListener('click', e => {
        let parentBook = deleteThis.parentElement;
        let gpBook = parentBook.parentElement;
        deleteTheBook(gpBook.dataset.row);
    });
});

//delete book from object function
function deleteTheBook(index){
    let newObj = myLibrary.filter((lib, ind) => ind!=index);
    console.log(newObj);
    myLibrary = newObj;
    deleteRow(index);
    changeDataSet(index);
    console.log(myLibrary.length);
    //console.table(myLibrary);
}


//delete rows in display
function deleteRow(rowNum){
    let tempNum = document.getElementById(rowNum);
    tempNum.remove();
}

//to change data set and id after deletion
function changeDataSet(newData){
    let changeAtt = document.querySelectorAll(".tr");
    let changePat = document.getElementsByClassName("tr");
    let i=0;
    changeAtt.forEach(changePat => {
        changePat.setAttribute('id', i);
        changePat.setAttribute('data-row',i);
        changePat.firstChild.innerText = i+1;
        i++;
        console.log(i);
        Sno=i+1;
        bookCount=i;
    });
    i=0;
}