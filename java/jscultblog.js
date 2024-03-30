// This function below reveals hidden paras when clicking on title//

document.body.addEventListener('click', (ev) => {
  const isExpandableTitle = !!ev.target.closest('.expandable-title-bar')
  const expandable = ev.target.closest('.expandable')

  if (!isExpandableTitle) {
    return
  }
  expandable.classList.toggle('expandable-open')
})

//
