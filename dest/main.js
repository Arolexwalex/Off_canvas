const friends = [
    'Wale',
    'john',
    'seyi',
    'frank',
    ['juli', 'jane','funke']
]

const [, , , , [b, a]] = friends
console.log(a)

const music = {
    Name: 'Amapiano',
    Genre: 'Dance',
    Category: ['Africa', 'Dancing', 'fast', 'jazz'],
    Year: 2024
}

const {Name, Genre, Category, Year} = music

console.log(Category[0])