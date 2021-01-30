const projects = {
  project1: {
    img: 'foo',
    title: 'foo'
  },
  project2: {
    img: 'bar',
    title: 'bar'
  }
}

console.log('object keys', Object.keys(projects)) // [ 'project1', 'project2' ]
console.log('object values', Object.values(projects)) // [ { img: 'foo', title: 'foo' }, { img: 'bar', title: 'bar' } ]

console.log('object entries', Object.entries(projects))
// [
//   [ 'project1', { img: 'foo', title: 'foo' } ],
//   [ 'project2', { img: 'bar', title: 'bar' } ]
// ] 