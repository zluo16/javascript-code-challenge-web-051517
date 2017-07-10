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


class CommentList {
  constructor(array) {
    this.comments = []
    if (array) {
      this.comments = array.map(comment => {
        return new Comment(comment)
      })
    }
  }

  createComment(text) {
    let comment = new Comment(text)
    this.comments.push(comment)
  }

  render() {
    return this.comments.map(comment => {
      return comment.render()
    }).join("")
  }

  filter(terms) {
    let termsArr = terms.split(" ")
    let filtered = this.comments.filter(function(comment) {
      let commArr = comment.text.split(" ")
      return termsArr.every(term => commArr.indexOf(term) > -1)
    })

    return filtered.map(comment => {
      return `<li>${comment}</li>`
    }).join("")
  }
}


class Comment {
  constructor(text) {
    this.text = text
  }

  render() {
    return `<li>${this.text}</li>`
  }
}
