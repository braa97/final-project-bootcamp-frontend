import './Home.css'
import './Widgets/Widgets'
import './ApartmentsTable/ApartmentsTable'
import Widgets from './Widgets/Widgets'
import ApartmentsTable from './ApartmentsTable/ApartmentsTable'

const apartments = [
    {
        _id: '643f0b30b226cdfe95943745',
        apartmentName: 'Urban Loft Living',
        budget: 7000,
        residents: [
            '643f0b30b226cdfe95943738',
            '643f0b30b226cdfe9594373b',
            '643f0b30b226cdfe9594373e',
            '643f0b30b226cdfe95943741',
            '643f0b30b226cdfe95943744',
        ],
        image: 'https://www.buyitinisrael.com/content/uploads/2020/09/WhatsApp-Image-2020-09-24-at-13.06.29.jpeg',
        address: '8 Dizengoff St, Tel Aviv, Israel',
        meals: [],
        __v: 0,
    },
    {
        _id: '643f0b56c799ab93d4cd5991',
        apartmentName: 'Penthouse Oasis',
        budget: 9000,
        residents: [
            '643f0b56c799ab93d4cd5984',
            '643f0b56c799ab93d4cd5987',
            '643f0b56c799ab93d4cd598a',
            '643f0b56c799ab93d4cd598d',
            '643f0b56c799ab93d4cd5990',
        ],
        address: '10 Dizengoff St, Tel Aviv, Israel',
        image: 'https://previews.123rf.com/images/darakchi/darakchi1511/darakchi151100023/49158391-israel-architecture-modern-apartment-buildings-in-tel-aviv.jpg',
        meals: [],
        __v: 0,
    },
]

export default function Home() {
    return (
        <>
            <div className='home-page'>
                <div className='home-container'>
                    <Widgets />
                    <ApartmentsTable apartments={apartments} />
                </div>
            </div>
        </>
    )
}
