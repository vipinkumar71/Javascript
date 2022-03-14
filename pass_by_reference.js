function demo_reference(temp) {
        temp['city'] = 'chowai' 
}

var vipin = {
    'name': 'vipin',
    'address':  'khawach'
}


demo_reference(vipin);

console.log(vipin);