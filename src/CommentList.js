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
