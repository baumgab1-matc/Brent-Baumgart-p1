(function () {

    var getEl = function(id) {
        return document.getElementById(id);
    }

    //array of services provided
    var services = ['Dog Walking', 'Dog DayCare', 'Grooming', 'Boarding'];

    //loop through services and display to page
    services.forEach(function (service) {
        var ul = getEl('services');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(service));
        ul.appendChild(li);
    })

    // START OF LOADING DOG DATA
    //array of dog objects, lots of these will not be displayed.  The idea is jus to display dogs of the month
    var dogData= [
        {
            name: 'Frank',
            breed: 'Mixed',
            about: 'Frank likes walks and chasing soccer balls',
            image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog1',
            isDogOfMonth: true
        },
        {
            name: 'Max',
            breed: 'Mixed',
            about: 'Max likes to bark',
            image: 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog2',
            isDogOfMonth: true
        }, 
        {
            name: 'Duke',
            breed: 'Mixed',
            about: 'Duke enjoys running and chasing his tail',
            image: 'https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog3',
            isDogOfMonth: true
        },  
        {
            name: 'Ruby',
            breed: 'Mixed',
            about: 'Ruby likes attention and snuggles',
            image: 'https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog4',
            isDogOfMonth: true
        },
        {
            name: 'Dog',
            breed: 'Shepard',
            about: 'Dog likes walks',
            image: 'https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog5',
            isDogOfMonth: false
        },
        {
            name: 'Coop',
            breed: 'Mixed',
            about: 'Coop likes attention and snuggles',
            image: 'https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog6',
            isDogOfMonth: false
        },
        {
            name: 'Charlie',
            breed: 'Mixed',
            about: 'Charlie likes attention and snuggles',
            image: 'https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog7',
            isDogOfMonth: false
        },
        {
            name: 'Uncle Frank',
            breed: 'Mixed',
            about: 'Uncle Frank likes attention and snuggles',
            image: 'https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
            selector: 'dog8',
            isDogOfMonth: false
        }
    ];

function DogPackage(dog) {
    this.name = dog.name;
    this.breed = dog.breed;
    this.about = dog.about;
    this.image = dog.image;
    this.selector = dog.selector;
    this.isDogOfMonth = dog.isDogOfMonth;
}


var writeDogPackageInfo = function(package) {
    //get references
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      breedEl = getEl(selector + '-breed'),
      aboutEl = getEl(selector + '-about'),
      imageEl = getEl(selector + '-image');

    //use reference to actually write data to DOM elements
    nameEl.textContent = package.name;
    breedEl.textContent = "Breed: " + package.breed;
    aboutEl.textContent = "About: " + package.about;
    imageEl.src = package.image;
}

//loop through data and display only if dog is one of the dogs of the mont
for (var i = 0; i < dogData.length; i++) {
    var package = new DogPackage(dogData[i]);

    if (package.isDogOfMonth === true) {
        writeDogPackageInfo(package);
    }
}
//END OF LOADING DOG DATA

//START OF LOADING COMMENT SECTION
var commentData = [
    {
        username: 'Tyler',
        body: 'My dog loves it here!',
        selector: 'comment1'
    },
    {
        username: 'Brent',
        body: 'Best dog walkers in town!!',
        selector: 'comment2'
    },
    {
        username: 'Sarah',
        body: 'Best place for dog grooming!',
        selector: 'comment3'
    },
    {
        username: 'Ted',
        body: 'Did a great job bathing my dog!',
        selector: 'comment4'
    }
]

function CommentPackage(comment) {
    this.username = comment.username;
    this.body = comment.body;
    this.selector = comment.selector;
}

var writeCommentPackageInfo = function(package) {
    var selector = package.selector,
      usernameEl = getEl(selector + '-username'),
      bodyEl = getEl(selector + '-body');

      usernameEl.textContent = package.username + " says...";
      bodyEl.textContent = package.body;
}

for (var i = 0; i < commentData.length; i++) {
    var package = new CommentPackage(commentData[i]);
    writeCommentPackageInfo(package);
}
//END OF LOADING COMMENT SECTION

}());