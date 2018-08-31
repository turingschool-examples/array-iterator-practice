const { expect } = require('chai');

const cohortMethods = require('../lib/instructorCohorts')

describe('Answers to instructor cohort problem set', () => {

  it('should return an array of instructors where each instructor is an object with a name and the count of students in their module', () => {
    const instructorStudentCount = cohortMethods.getInstructorStudentCount();
    
    expect(instructorStudentCount).to.deep.equal([ 
      { name: 'Pam', studentCount: 21 },
      { name: 'Brittany', studentCount: 21 },
      { name: 'Nathaniel', studentCount: 21 },
      { name: 'Robbie', studentCount: 18 },
      { name: 'Leta', studentCount: 18 },
      { name: 'Travis', studentCount: 30 },
      { name: 'David', studentCount: 30 },
      { name: 'Louisa', studentCount: 30 },
      { name: 'Christie', studentCount: 20 },
      { name: 'Will', studentCount: 20 } 
    ])
  })

  it.skip('should return an object of how many students per teacher there are in each cohort', () => {
    const studentTeacherRatio = cohortMethods.getStudentTeacherRatio();

    expect(studentTeacherRatio).to.deep.equal({
      "cohort1801": 9,
      "cohort1803": 10,
      "cohort1804": 7,
      "cohort1806": 10,
    })
  })

  it.skip('should return an object where each key is a curriculum topic and each value is an array of instructors who teach that topic', () => {
    const courseInstructors = cohortMethods.getCourseInstructors();

    expect(courseInstructors).to.deep.equal({ 
      scope: [ 'Pam', 'Nathaniel', 'Will' ],
      recursion: [ 'Pam', 'Leta' ],
      node: [ 'Pam', 'Robbie', 'Leta', 'Louisa', 'Christie' ],
      oop: [ 'Brittany', 'Nathaniel', 'Will' ],
      pwas: [ 'Brittany', 'Robbie', 'Leta', 'Louisa' ],
      mobile: [ 'Nathaniel' ],
      javascript: [ 'Travis', 'David', 'Louisa', 'Christie', 'Will' ],
      html: [ 'Travis', 'David', 'Louisa' ],
      css: [ 'Travis', 'David', 'Louisa' ],
      markdown: [ 'David' ],
      git: [ 'David' ],
      react: [ 'Christie', 'Will' ],
      redux: [ 'Will' ] 
    })
  })

  it.skip('should return an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills', () => {
    const instructorMods = cohortMethods.getInstructorMods();

    expect(instructorMods).to.deep.equal({
      "Brittany": [ 2, 4 ],
      "Christie": [ 1, 2, 3, 4 ],
      "David": [ 1, 2, 3, 4 ],
      "Leta": [ 2, 4 ],
      "Louisa": [ 1, 2, 3, 4 ],
      "Nathaniel": [ 2, 4 ],
      "Pam": [ 2, 4 ],
      "Robbie": [ 4 ],
      "Travis": [ 1, 2, 3, 4 ],
      "Will": [ 1, 2, 3, 4 ]
    })

  })
  
})