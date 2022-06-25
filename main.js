let list = $('ul.posts');

$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, element){
                console.log(element.title);
                list.append('<li>' + element.title + '</li>');
            })
        }
    });
});