

























































































































































































if(this.sortMethod == 'Name') {
  this.uncheckedTodo.sort(sortWithName);
}












update() {
  this.checkedTodo.forEach((todo) => {
    this.element.insertBefore(todo.element, todoCreator.nextSibling);
  });
  this.uncheckedTodo.forEach((todo) => {
    this.element.insertBefore(todo.element, todoCreator.nextSibling);
  });

  // sort
  if(this.sortMethod == 'Name') {
    this.uncheckedTodo.sort(sortWithName);
  }
  else if(this.sortMethod == 'Date') {
    this.uncheckedTodo.sort(sortWithDate);
  }

  createCalendar(currentYear, currentMonth, this);
}
