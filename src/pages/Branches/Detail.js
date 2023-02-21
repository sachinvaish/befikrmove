import React from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from './DetailItem';

export default function Detail() {

    const {name}= useParams();
    
    const branches = [
        {
            city: 'Delhi',
            description: 'Befikrmove is one of the trusted Packers and Movers in Delhi. We are pioneers in the packing and moving industry, we offer a wide selection of high-caliber services that are sure to leave a lasting impression on our clients. Our Corporate Office is also located in Delhi, we would like to ensure that we provide affordable packers and movers services in Delhi',
            phone: 7764046100,
            address: 'Corporate Office	158/1/2, Gali No 11 Samta vihar Mukundpur Part 2 New Delhi 110042',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Patna',
            description: 'Are you looking for qualified Packers & Movers in Patna, Bihar? Befikrmove is best for hiring expert movers and packers. Avail the services of one of the top movers and packers in Patna with us at reasonable prices. Apart from being affordable, our co-workers are qualified, skilled, experienced, and registered as well.',
            phone: 7979767957,
            address: 'Ghana Colony Road Ramakrishna nagar Kankarbagh 2 PATNA BIHAR 800020 ',
            email: 'patna@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Agra',
            description: 'With local associates and operations across India, Befikrmove is the fastest-growing company in the Top Movers & Packers industry in Agra. Packers and movers in Agra provide services from picking up the package at your doorstep to delivering it to the required locations along with handling any related difficulties like sales, taxes, and insurance.',
            phone: 8126657772,
            address: 'BefikrmoveShop 457/6, Tp Nagar, Agra, Uttar Pradesh 282002',
            email: 'agra@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Allahabad',
            description: 'Befikrmove Packers and Movers in Allahabad is the ideal place to meet your relocation demands. We are the most trusted Packers and Movers in Allahabad, working to meet the needs of the clients for packing and moving in a simple yet creative approach. have been.',
            phone: 7764046100,
            address: '951 kalyanidavi opp kalyanidavi temple, Allahabad',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Aurangabad',
            description: 'Nowadays, managing the packing and moving process can be quite a challenge. Your packing needs and wishes are in good hands with Packers And Movers OfAurangabad. You should hire Befikrmove packers and movers in Aurangabad if you want to relocate without any worries.',
            phone: 7764046100,
            address: 'Dharmatma Complax, Avishkar Chowk N-5 Cidco Opp. Swami Smarth Tea House, Aurangabad -431003',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bangalore',
            description: 'Are you looking for top packers and movers in Bangalore? Befikrmove is your one-stop shop for packing and moving services. You can find a list of top-verified movers in Bangalore who are qualified to handle any of your packers and moving needs.',
            phone: 9886526564,
            address: '#41, Jai Bharat Parking TCI Bus stop 18km Tumkur Road, Madavara Bangaluru Karnatka 562162',
            email: 'bangalore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Vadodara',
            description: 'Befikrmove Packers And Movers provide professional packing and moving services in Vadodara at affordable prices. We have knowledgeable employees on staff who can manage loading, transportation, and packing. What sets our company apart from other removal service providers is our commitment to pricing and accessibility.',
            phone: 9328970777,
            address: 'Shop No-9,Nr S R Petrol Pump, Sayajipura, Ajwa Road Bridge Village, Ajwa Road, Vadodara',
            email: 'vadodara@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bhagalpur',
            description: 'Homes and businesses can be shifted without any problems thanks to the packers and movers of Bhagalpur. Befikrmove offers a full range of relocation services in Bhagalpur at competitive prices, so you can trust us for a safe and smooth relocation experience within your price range.',
            phone: 7764046100,
            address: 'Complex, Radha Rani Sinha Road, Bhagalpur, Bihar-812001',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bhilai',
            description: 'Befikrmove Packers and Movers offer Logistics and Transportation, Domestic Packing and Moving Services, Local Moving, Relocation, and Packers and Movers in Bhilai. You can avail expert, top-notch packers and movers services from Packers and Movers in Bhilai with us.',
            phone: 7764046100,
            address: 'Church Road Supela Panch Rastha Bhilai, Chattisgarh 490023',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bhopal',
            description: 'Befikrmove Packers and Movers offer Logistics and Transportation, Domestic Packing and Moving Services, Local Moving, Relocation, and Packers and Movers in Bhilai. You can avail expert, top-notch packers and movers services from Packers and Movers in Bhilai with us.',
            phone: 9589584986,
            address: '52 rajnagar colony near truba college karoand, bhopal 462030',
            email: 'bhopal@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bhubneswar',
            description: 'Befikrmove packers and movers provide expert moving services in Bhopal that make it simple and affordable to move your home, office, bike, automobile, or any other packing and work from one place to another within the city. Our professionals carefully monitor the entire process to ensure that all the goods are perfectly packed and ready for transportation when they are shifted from one place to another.',
            phone: 9078779231,
            address: '26/2789,Cenal Road,Shantinagar,Jharapara, bhubaneswar,odisha-751006',
            email: 'bhubneswar@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Bilaspur',
            description: 'With the intention of providing quality and service, Befikrmove Packers & Movers in Bilaspur is the top Packers & Movers with an experience of years. Our staff members are well trained, polite and professional. We are renowned packers and movers across the market. With an aim to provide complete customer satisfaction, we offer Packing and Moving, Residential Moving, Business Moving, Industrial Moving, and International Moving services.',
            phone: 7764046100,
            address: '109, Sindhi Colony, Mandir Chowk, beside Equitas Small Finance Bank Limited, Jarhabhata, Bilaspur, Chhattisgarh 49500',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Chennai',
            description: 'By relieving you of all stress and exceeding your expectations, we aim to improve your sifting experience. With our network across the city, we can provide you with services in any area within or outside Chennai. A very simple, smart and hassle-free contact us to avail our top-class moving services',
            phone: 9176009933,
            address: '74-A, Velachery Main Rd, Velachery, Chennai-600042 ',
            email: 'chennai@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Chandigarh',
            description: 'Welcome to Befikrmove Packers & Movers! As one of the top movers and packers in Chandigarh, we have the required resources, skills, and knowledge to provide unmatched moving services. There is no limit to our ability to pick up goods from any location in Chandigarh and deliver them to the desired destination within or outside the country owing to our wide network across India. We have developed a straightforward and technologically sophisticated solution to your moving issues.',
            phone: 8591858064,
            address: '405 pipli wala town Manimajra, Chandigarh 160101',
            email: 'chandigarh@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Dehradun',
            description: 'Packers And Movers In Dehradun We aim to provide high quality services at reasonable prices. For your convenience, we provide the best packers and movers services in Dehradun to get you transferred from your desired location. We provided our services in Dehradun in a manner that exceeded the expectations of our clients.',
            phone: 7764046100,
            address: 'F-103, Saharnpur road,transport Nagar, Dehradun 248002',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Dhanbad',
            description: 'Befikrmove Packers and Movers are the top Packers and Movers in Dhanbad, Jharkhand. We are a reputed company offering Moving and Packing services. All of us aim to select the most reputed and promising movers and packers in Dhanbad so that they work as per your expectations, provide quality services and guarantee that everything will be delivered at the desired location as it should be.',
            phone: 9308794171,
            address: 'Matkuria, Katras Rd, Near Mahindra Showroom, Jawahar Nagar, Dhanbad, Jharkhand 826001',
            email: 'dhanbad@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Faridabad',
            description: 'Befikrmove Packers & Movers is the official Packers and Movers in Faridabad. Our office in Faridabad is effectively delighting clients across India with our experience in packing and moving services. This business is offering services keeping in mind the emotional importance of the customers representing the ethics and values of our country.',
            phone: 7764046100,
            address: 'B-1010, Green fields Colony, Sector 42/43, Faridabad-121009,Haryana',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Gandhidham',
            description: 'Apart from offering packers and movers in Gandhidham, Befikramove also provides wooden crates for all types of consignment items. These services include home relocation, bike transportation, commercial goods transportation, office relocation, car transportation service, custom clearance for export or import, insurance, commercial goods transportation, cargo and courier services, employee relocation, and corporate relocation.',
            phone:936834897,
            address: 'Plot No 3, Ashapura Park, Meghpar, Bharuchi, Gandhidham',
            email: 'gandhidham@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Ghaziabad',
            description: 'Ghaziabad is a district in the most populous state of Uttar Pradesh. The city undergoes a series of daily transfers. Keeping this fact in mind we have developed a well-organized branch office in Ghaziabad. We, as a company, are aware of the difficulties people face in commuting to or from Ghaziabad and hence are here to help them do so without any incident. That is why we are recommended as the top Packers & Movers in Ghaziabad',
            phone: 7764046100,
            address: '63 Ground Floor Vrindavan Garden Near Raj Bagh Metro Sahibabad, Ghaziabad',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Gurgaon',
            description: 'Packers and movers play an important role in Gurgaon. Relocation will be simple and convenient if you choose to use packing and moving in Gurgaon. From packaging your household items to your workplace furniture, we have the ideal moving experts for you. Therefore, there is no need to stress about loading, unloading or packing, and unpacking; Just inform us about your moving needs.',
            phone: 9212672222,
            address: 'Gurgaon	2893/4, 3rd Floor, Chuna Mandi, Pahar Ganj, New Delhi-55',
            email: 'gurgaon@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Guwahati',
            description: 'Packers and movers in Guwahati are dependable moving professionals who make the laborious relocation process simple, convenient, and satisfying for their clients at reasonable moving charges. To make the complicated process of relocating easy for you, Guwahati moving firms provide services including packing, moving, loading, unloading, transportation, and unpacking. They have a pool of talented and knowledgeable employees who are experts in their individual fields.',
            phone: 6001740527,
            address: 'sonkuchi path, near spring dale I school, beharbari charali, NH37, Guwahati, Assam-781029',
            email: 'guwahati@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Gwalior',
            description: 'Being the top Packers And Movers in Gwalior, we aim to provide high-quality services at reasonable prices. We provide best packers and movers services in Gwalior which makes it easy for you to move to or from Gwalior to your preferred location. We deliver our services in Gwalior in a manner that exceeds the expectations of our clients.',
            phone: 9584691919,
            address: 'G-7 The Legacy Plaza, Airport Road, Gwalior, Madhya Pradesh 474005',
            email: 'gwalior@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Haridwar',
            description: 'The working team of the company featured on Befikrmove is modest and completes each and every project efficiently. They are proficient in providing a variety of services including packing, loading, unloading, and unpacking with utmost safety and care. The primary objective of Packers and Movers in Haridwar is to provide high-quality moving services to our clients. We are dedicated to using our capabilities and knowledge to make your transfer a safe and easy process for you.',
            phone: 7764046100,
            address: 'HP Petrol Pump SIDCUL Bypass, Bhadrabad Haridwar – 249402',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Hyderabad',
            description: 'Are you looking for reputed packers and movers in Hyderabad, Telangana as you are planning to relocate? If your answer is yes then your search is over. We will put you in touch with only the most reliable movers and packers, whether you are looking to hire house moving services or business relocation services. Here, you can check their testimonials, rankings, list of services, and prices.',
            phone: 9394949408,
            address: '2-170/a youth colony old Haffezpet Miyapur, Hyderabad -500049 ',
            email: 'hyderabad@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Indore',
            description: 'We are a leading company in the packing and moving industry, providing a wide range of relocation services. As skilled packers and movers in Indore, we are providing satisfactory results keeping in mind the emotional importance attached to our valuable clients. With each new job we take up, the trust of people, both domestically and internationally, has helped us deliver better results.',
            phone: 9303024555,
            address: 'Shop.6 moulika homes kalp KanDhenu colony, velocity multiplex, Bhusa Mandi, Indore-452010',
            email: 'indore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jabalpur',
            description: 'At Befikrmove Packers & Movers, we aim to provide high-quality services at reasonable prices. We provide the best packers and movers services in Jabalpur which makes it easy for you to drop from Jabalpur to your desired location. We have delivered our services in Jabalpur in a manner that exceeds the expectations of our clients.',
            phone: 9285187700,
            address: 'Shop No 5, Karondanala Near Katni ByPass,	Punjabi Tadka Restaurant, Madhya Pradesh 482004',
            email: 'jabalpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jaipur',
            description: 'Looking for reputed and honest movers and packers in Jaipur? At that point, Befikrmove is the best place to stop your search. It serves as a one-stop resource for finding top Jaipur packers and movers in India. They have a vast roster of authorised packers and movers in Jaipur. So that people who need help moving home in Jaipur can easily access high-quality and affordable rehabilitation services.',
            phone: 7764046100,
            address: 'Plot No. 5, 200 Bypass Ajmer Road, Jivan Vihar Colony, Opp. Karni Vihar, Police Station, Jaipur, Rajasthan 302021',
            email: 'jaipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jammu',
            description: 'The top Packers and Movers in Jammu are Befikrmove Packers and Movers. In Jammu, we provide complete moving and packing services at reasonable prices. We are aware of the basic needs of our clients and offer a complete range of packing and moving services in Jammu. Your products are carefully packed by one of our qualified professionals without any damage. We use only the best material for packing.',
            phone: 9501131472,
            address: '444, Main GT Road, Samba, Bari Brahmana, Jammu, and Kashmir - 184121',
            email: 'jammu@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jhansi',
            description: 'Owing to their wide experience in the packaging industry, Befikrmove packers and movers in Jhansi guarantee any type of property management on the occasion of relocation, eviction, and relocation of homes and businesses. One of the top movers and packers in Jhansi, we provide affordable services in the areas of loading and unloading, house moving, office moving, and car transport. We also provide reliable and speedy services in these areas.',
            phone: 9584691919,
            address: 'no 1733 khati baba tube well road near mount litra zee school, Jhansi',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jharsuguda',
            description: "Jharsuguda guarantees top-notch moving services and complete customer satisfaction. The biggest choice for you comes from the years of experience that we, Top Packers and Movers Jharsuguda have gained by operating in this field for the last 10+ years, irrespective of what type of goods or items you want to move or have to move. want to do The services of Befikrmove Packers & Movers - Jharsuguda is effectively delivered to the customer's location within the specified time frame.",
            phone: 7764046100,
            address: 'Dung Dung Complex, Shop No-10, Bombay Chowk, Jharsuguda, Odisha 768203',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Jodhpur',
            description: "We are a well-known company in the logistics and transportation sector, and we have been offering high-caliber services to our clients for many years. If you are thinking of visiting or visiting Jodhpur then you can contact us anytime. We help you move your personal and business belongings with ease and with utmost care. We are honored to be recognized as the top packers and movers in Jodhpur by our clients.",
            phone: 9799233390,
            address: 'Basni Police Station, Near Govt. School Jodhpur Rajasthan - 342005',
            email: 'jodhpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Kakinada ',
            description: "One of the most reputed and well-known Packers and Movers in Kakinada is Befikrmove Packers and Movers, who are also renowned for providing the most sought-after domestic and international relocation services across India. Since long ago, it has been blessed with an efficient and knowledgeable staff of packers and movers, and the business takes pride in providing hassle-free packing and relocation services from Hyderabad to Kakinada or any other place.",
            phone: 7764046100,
            address: '11-11-2/A, Above Central Bank of India, Rama Rao Peta, Kakinada, Andhra Pradesh 533004',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Kanpur',
            description: "One of the most reputed packers and movers in Kanpur, we are more than happy to make your relocation as quick and stress-free as possible. We are a renowned logistics company with the capability of providing a first-class moving experience to our customers. We cater to every relocation demand from Kanpur with a tradition of providing foolproof services that are ready to meet your expectations and employ top-notch packing and moving techniques.",
            phone: 8736006262,
            address: 'S 3250, Avas Vikas Number 3, e.w, Kalyanpur, Kanpur,Uttar Pradesh 208017',
            email: 'kanpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Kolkata',
            description: "Befikrmove is an internet directory or contact list for some of the most reputable packers and movers in different Indian locations. It serves as a platform to link clients with Kolkata's devoted and knowledgeable packers and movers. Customers may quickly get a list of reliable packing and moving businesses in Kolkata using this online directory of packers and movers. You may successfully complete relocation, home transferring, office relocating, or car relocation in Kolkata with the help of these mentioned moving firms in Kolkata.",
            phone: 7014095286,
            address: '35B, Majlish Ara Road, Mini Park, Kolkata - 700041',
            email: 'kolkata@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Lucknow',
            description: "Befikrmove, one of the leading Packers and Movers in Lucknow, provides reliable and prompt services in the field of Moving and Packing in Lucknow. We have established a reputation over the years that inspires our customers to use us again and again. Almost every day, we welcome new customers and work hard to spread the word about who we are. Contact us for packing and moving services in Lucknow, loading and unloading services in Lucknow, and all other moving services at affordable rates with safety and promptness.",
            phone: 7014095286,
            address: '35B, Majlish Ara Road, Mini Park, Kolkata - 700041',
            email: 'kolkata@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Ludhiana',
            description: "At Befikrmove Packers & Movers, we aim to provide high quality services at reasonable prices. We provide the best packers and movers services in Ludhiana which makes it easy for you to move from Ludhiana to your preferred location. We have provided our services in Ludhiana in a manner that has exceeded the expectations of our clients.",
            phone: 9888322510,
            address: 'SCO-7, First Floor, Transport Nagar,Ludhiana - 141003, Punjab',
            email: 'ludhiana@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Mysore',
            description: "Befikrmove provides services for domestic and international corporate relocation. We provide end-to-end services ranging from initial policy advisory services to safely delivering the products on the spot, which are efficiently handled by our professionals. The efficient team of Befikrmove top  Packers & Movers in Mysore highly customized services, takes care of every detail of the move as well as packs all the valuables with high-quality material.",
            phone: 9888322510,
            address: '148, Site No 06, Basaveshwar Nagar, 1st Stage Hebbala, Post, Metagalli, Mysore 570016',
            email: 'mysore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Muzaffarpur',
            description: "Befikrmove Packers And Movers is the best and most trusted name in the Bihar city of Muzaffarpur Packers and Movers industry. Our moving and packing services are easy, safe, and reliable. We provide a variety of moving services to individuals and business organizations. We have over five years of expertise in handling a wide variety of items.",
            phone: 7764046100,
            address: 'Muzaffarpur',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Meerut',
            description: "The challenging task of Befikrmove Packers And Movers in Meerut requires expert labour and state-of-the-art technology. Before products are packed and loaded into trucks, moving services will first evaluate the items to see if they can be moved. Movers and packers in Meerut are aware of the value of your asset. We provide the required safety and security for packers and movers in Meerut.",
            phone: 9027442551,
            address: '192/3, near Shri Durga Mata Mandir, Sector 3, Shastri Nagar, Meerut, Uttar Pradesh 250004	',
            email: 'meerut@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Mumbai',
            description: "Befikrmove Packers & Movers is one of the top Packers and Movers in Mumbai. We offer the best packers and movers, loading and unloading, household goods movement, transportation services, and car transport services at affordable rates. We as local packers and movers in Mumbai handle all relocation requirements in a safe and efficient manner.",
            phone: 7988475948,
            address: '13, 1st Floor, Rolan Compound, Ag Link Road, Next to BMC School Near Dhanlaxmi Building, Sakinaka 400072 Mumbai',
            email: 'mumbai@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Nagpur',
            description: "We provide shifting solutions and have over 10 years of experience. We are well aware of every nook and corner of Nagpur. Top movers and packers in Nagpur provide affordable moving services for houses, apartments, cars, bikes, and plants, and animals. Experienced and skilled movers packers in Nagpur have a good heart and intellect. They have skilled and knowledgeable personnel to sensitively render prompt, attentive, and pleasant services to the customers around Nagpur.",
            phone: 9325235587,
            address: 'Nagpur 40, 1st Floor, Suri Complex, Adarsh Nagar, Nagpur 440023',
            email: 'nagpur@befikarmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Nashik',
            description: "Packers and movers in Nashik, Maharashtra are skilled packing and moving businesses that are authorized to do relocation work both in and outside Nashik. These moving companies guarantee a safe and secure moving experience to their customers with an efficient and qualified team of professionals. The befikrmove web directory has a reliable list of movers and packers in Nashik that you can use to make your relocation a wonderful one.",
            phone: 9371882040,
            address: '8, gajlaxmi rowhouse, Muralidhar Nagar,pathardi, phata,Nashik 422010',
            email: 'nashik@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Pune',
            description: "To meet the specific requirements of each of our clients, Befikrmove Packers And Movers offer comprehensive packing and moving services. Your items will be packed and moved safely and securely by our team of skilled experts who use the most up-to-date methods and equipment.",
            phone: 9860127272,
            address: 'Office No 3, Plot no 69, Sector no 23 Transport nagar Nigdi Pune-44',
            email: 'pune@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Raigarh',
            description: "Befikrmove is one of the oldest moving companies in your city and the Top Packers & Movers in Raigarh. We provide the best packaging to our clients. Befikrmove Packers And Movers In Raigarh Are Able To Manage In A Very Practical Way. Under the guidance of our ongoing experts, we provide professional packing services to provide a protective coating to your goods. Our top priority is to provide you with high-quality packing supplies.",
            phone: 9300808342,
            address: 'Shop No16,Sarangarh bus stand, sangitarai road, Raigarh',
            email: 'raigarh@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Raipur',
            description: "Packers and movers in Raipur, we aim to provide high-quality services at reasonable prices. We provide top packers and movers services in Raipur to make it easy for you to relocate to Raipur or to your preferred location. We deliver our services in Raipur in a manner that exceeds the expectations of our clients",
            phone: 8421099346,
            address: 'Ganga Vihar Colony, Amlidih, Krishaknagar, Raipur',
            email: 'raipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Rajkot',
            description: "Befikrmove Packers Movers provides you with a variety of qualified packers and movers services in Rajkot. Also, this is the place where you can get all the top discounts and deals offered by various packers and movers in Rajkot. Household moves can be stressful if not well-planned. We promise you a smooth and enjoyable move.",
            phone: 7764046100,
            address: 'Rajkot',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Ranchi',
            description: "Befikrmove provides top-class packing and moving services in Ranchi. You can easily identify reputed Ranchi packers and movers by using this website. If you intend to move then you do not need to search for packers movers Ranchi everywhere. This is the ideal place to find contact details of reliable Packers & Movers in Ranchi.",
            phone: 9113417469,
            address: 'Near, Booty More Rd, Gautam Green City, Vijay Nagar, Ohdar Village, Ranchi, Jharkhand 835217',
            email: 'ranchi@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Rudrapur',
            description: "There is no set price for transportation services, and packing and moving is a daunting task. Top Packers and Movers in Rudrapur will provide you with the best movers and packers to make your relocation effortless. We all know that moving is a difficult process, and if you're a working person, it can be nearly impossible to schedule moving and shifting.",
            phone: 7764046100,
            address: 'Preet vihar colony near St marks school, Delhi-Rampur road, Rudrapur-263153',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Salem',
            description: "Best Packers and Movers in Salem, we aim to provide high-quality services at affordable prices. We provide the best packers and movers services in Salem to make it easy for you to move from Salem to your desired location. We have provided our services in Salem in a manner that exceeds the expectations of our clients.",
            phone: 7764046100,
            address: 'No. 3, Manimekali Complex, Trichy Main Road, Seelanaikapatti, Salem, Tamil Nadu, 636201',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Sambalpur',
            description: "In the Sambalpur region of Orissa, Befikrmove are amongst the most renowned shifting experts, who impart shifting expertise in all business sectors. We are known as 'The Largest Mover of Household Items in India'. In our capacity as renowned packers and movers in Sambalpur, we endeavor to cater to the various relocation needs of people living in the Sambalpur district of Odisha and provide them with ongoing packing and moving assistance during their relocation process.",
            phone: 7764046100,
            address: 'NH-6, Bareipali,Near Reliance Petrol Pump (Map), Sambalpur - 768006',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Samastipur',
            description: "Finding top packers and movers in Samastipur can be challenging. One of the most trusted Packers and Movers in Samastipur, Befikrmove Packers and Movers is the ideal choice for any type of relocation services. We provide complete moving services for residential, commercial, or corporate relocation. Clients can avail of all types of packing and moving services at reasonable prices",
            phone: 7764046100,
            address: 'Near indian Oil Petrol Pump Tazpur Road Mushrigharari Samastipur 84101',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Satna',
            description: "We are the best packers and movers in Satna. The region is famous for its notable technology and business parks. We are the ideal moving partner if you are looking to commute to and from Satna and do not want to deal with the stress of packing and moving. We are a well-known business with many years of local moving experience, and we are dedicated to providing a door-to-door service for everyone.",
            phone: 7764046100,
            address: 'Jeevan Jyoti Colony Rd, behind IDBI Bank, Shakti Vihar, Jeevan Jyoti Colony, Satna, Madhya Pradesh 485001',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Surat',
            description: "As a result, finding top packers and movers in Surat can be a herculean endeavor for you. Many people move to Surat for various reasons, but once you experience the charm and beauty of this city you will not be able to forget it.  For all your moving needs in Surat at reasonable prices, turn to Befikrmove Packers And Movers. After using our packers and movers services you will never consider using any other service provider.",
            phone: 9898662924,
            address: '46, sai nagar housing soc dindoli Surat, Gujarat 394210',
            email: 'surat@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Sonbhadra',
            description: "Focus on all the positive possibilities and know that Befikrmove Packers And Movers in Sonbhadra is with you. Let us ease your stress and let you know that you are our first priority in every way. We know that selecting the best packers and movers in Sonbhadra can be difficult. Top Packers and Movers in Sonbhadra At Sonbhadra, Domestic and International Packers and Movers Services, we are fully capable and eager to assist you in relocating your household belongings.",
            phone: 7764046100,
            address: 'T P Nager, Unnamed Road, near Kashi More, Anpara, Sonebhadra Uttar Pradesh 231225',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Udaipur',
            description: "Top packers and movers in Udaipur consider factors including business age, trust, reputation, excellence, quality of services, customer happiness and feedback, pricing, and value for money. Only the best is presented to you. Businesses that have been approved by our staff bear the Verified badge. Their business and contact details are updated regularly.",
            phone: 9329324555,
            address: '38 Ekling Colony, Behind Reliance Fresh, Hiran magri Sector 3, Udaipur - 313001',
            email: 'udaipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Varanasi',
            description: "If you need to Best Packers and Movers in Varanasi, or relocate to any other city, then you must work with a reputed moving company. Our team has trained staff who take care of every aspect of the moving process. Can manage, from packing of goods to loading and unloading, etc. Befikrmove offers Varanasi house relocation services, compares moving costs, and chooses the company that best meets your demands.",
            phone: 7764046100,
            address: 'Maheshpur Block Road , Lahartara , Varanasi 221106',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Vijayawada',
            description: "One of the top Packers and Movers in Vijayawada, Befikrmove Packers, and Movers provides services for packing and relocating anywhere in the world. Best Packers & Movers in Vijayawada take pride in introducing themselves as a top moving company that provides safe and reliable moving services including loading and unloading, domestic and international shifting, packing and unpacking, vehicle carrier transportation, and of course, warehousing.",
            phone: 7764046100,
            address: 'Shop No.-14, Ground Floor, H.R.T Complex, Housing Board Colony, Bhavanipuram, Vijayawada -520012(AP)',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Visakhapatnam',
            description: "Moving involves many tedious tasks including packing the goods, loading and unloading them, moving them to the new location, unpacking them, and rearranging them appropriately. The process is made simple, more smooth, and hassle-free by professional packers and movers. The best packers and movers in Visakhapatnam are qualified to move all your belongings safely and securely to a new location within the same city or any other city.",
            phone: 7764046100,
            address: 'Visakhapatnam',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        },
        {
            city: 'Zirakpur',
            description: "We believe in customer satisfaction and always provide the best packers and movers in Zirakpur service on time. We provide exclusive, world-class, ISO certified, and ranked among the top quality Packers and Movers in Zirakpur providers across India. We have services across the globe. Befikrmove Packers & Movers in Zirakpur understand that packing and moving is not an easy task as it involves a long process and a range of services are required to complete the entire process.",
            phone: 8591858064,
            address: 'SCO-8, Cabin no-4 , First Floor, Above On Dot Courier , Ranjan plaza, Zirakpur (140603)',
            email: 'zirakhpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7266178996774!2d85.14171651496967!3d25.58076058371924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c137eb57%3A0xeee18225f273dbbf!2s2%2C%20Ghana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1676974760247!5m2!1sen!2sin'
        }
    ];

    // console.log('lenght branches : ',branches.length);

    return (
        <>
            {branches.map((branch) => {
                if ((branch.city === name)||(branch.city.toLowerCase() === name)) {
                    return (
                        <DetailItem
                            key={branch.city}
                            city={branch.city}
                            description={branch.description}
                            phone={branch.phone}
                            address={branch.address}
                            email={branch.email}
                            location={branch.location}
                        />
                    )
                }
            })}
        </>
    );
}
