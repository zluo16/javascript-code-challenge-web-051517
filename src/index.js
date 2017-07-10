$(document).ready(function(){
  const commentList = new CommentList()
  addComment(commentList)
  filterComments(commentList)
})

function filterComments(commentList) {
  $('#filter-submit').on('click', function(event) {
    event.preventDefault()
    let terms = $('#filter-text').val()
    $('#comments-list').html(commentList.filter(terms))
    $('#filter-text').val('')
  })
}

function addComment(commentList) {
  $('#note-submit').on('click', function(event) {
    event.preventDefault()
    let text = $('#comment-text').val()
    commentList.createComment(text)
    $('#comments-list').html(commentList.render())
    $('#comment-text').val('')
  })
}
