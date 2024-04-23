import {Category} from "./Category";
export interface Product{
    id:number;
    name:string;
    price:number;
    image:string;
    category: Category;
    status:boolean;
    description:string;
}
export const products: Product[] = [
    {
        id: 1,
        name: 'Bauyrsaq, balqaimaq',
        price: 1100,
        image: 'https://static.ernur.kz/article/5ab897ce95ce4.jpeg',
        category:{
            id: 1,
            name: "Fast Food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt192ytBeQjwmQvphzdbnQXDzPSXnnaRcDswMA_akUA&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 2,
        name: 'Qyzanaq sälsasy qosylğan samsa',
        price: 1500,
        image: 'https://i.ytimg.com/vi/ZxjWHrjhZ04/mqdefault.jpg',
        category: {
            id: 1,
            name: "Fast Food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt192ytBeQjwmQvphzdbnQXDzPSXnnaRcDswMA_akUA&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 3,
        name: 'Tary qosylğan salat',
        price: 5100,
        image: 'https://qrmenu.marvarid.kz/uploads/posts/2022-09/1663835425_teplyj-salat-s-baklazhanami-s-syrom-rikotta-cyplenkom-v-souse-terijaki.jpg',
        category:{
            id: 1,
            name: "Fast Food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt192ytBeQjwmQvphzdbnQXDzPSXnnaRcDswMA_akUA&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 4,
        name: 'Almaty asşaiandary, lazjan,\n' +
            'qyzanaq sälsasy',
        price: 4900,
        image: 'https://static.tildacdn.com/tild3330-3438-4033-a438-383363613135/_.jpg',
        category: {
            id: 1,
            name: "Fast Food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt192ytBeQjwmQvphzdbnQXDzPSXnnaRcDswMA_akUA&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 5,
        name: 'Balyq sorpasy: baqtaq, asşaiandar,\n' +
            'tary, qaimaq',
        price: 3900,
        image: 'https://healthy-food-near-me.com/wp-content/uploads/2021/03/how-long-to-cook-the-fish-soup.jpg',
        category: {
            id: 1,
            name: "Fast Food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt192ytBeQjwmQvphzdbnQXDzPSXnnaRcDswMA_akUA&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 6,
        name: 'Pısırılgen qyzanaqtan jasalğan ūiğyr\n' +
            'sorpasy, üi kespesı, jylqy etı',
        price: 3300,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6kDVNAvQCuY7ZDPjb-L86xFLJP3FwN5t97SmLpvN-g&s',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 7,
        name: 'Dūnğan kespesı',
        price: 4700,
        image: 'https://sun9-25.userapi.com/impf/c638122/v638122371/1e08e/yXAMXX7Ae5Q.jpg?size=604x333&quality=96&sign=45127a230b8162d34cf537e93b14b65e&type=album',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 8,
        name: 'Etten chychkan manty, airan,\n' +
            'chili, piaz maiy',
        price: 4500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6nVUQ3YmkctK7h6PFEPxOZyrgGg_ooPky3EazofWSg&s',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 9,
        name: 'Balapan etı qosylğan tūşpara,\n' +
            'tauyq sorpasy, jusai',
        price: 3200,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjWP-_PuuYBoimbj7sIH4Kzd8Ybjzd5Wj7z7ShkkEWA&s',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 10,
        name: 'Beşbarmak',
        price: 6800,
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/9707108/pub_644e1c8167fcc550a6566bc7_644e1da76bdf6b3113e1d5fd/scale_1200',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 11,
        name: 'Jylqy etınen tartar, būryş tūzdyğy,\n' +
            'chili maiy, taba nan',
        price: 4800,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNUVDXdXsDbp8lH9w6Bdz4tZDXtfcmHWtD3ssTfIq4A&s',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 12,
        name: 'Şaşlychki',
        price: 3800,
        image: 'https://www.povarenok.ru/data/cache/2016oct/06/09/1731671_84707-710x550x.jpg',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 13,
        name: 'Mramornyi antrekot, vzbitoe maslo\n' +
            's chernym chesnokom',
        price: 6500,
        image: 'https://img.iamcook.ru/old/upl/recipes/zen/u-46f1dbb951bdb7d5bddc18845e9673cf.JPG',
        category: {
            id:2,
            name: "Drink",
            img: 'https://images.unsplash.com/photo-1654074518402-9e003b32b2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlscyUyMGFuZCUyMG1vY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 14,
        name: 'Tomlenaia grudinka iagnönka, mätyi\n' +
            'kartofel, brynza, finikovyi sous',
        price: 6900,
        image: 'https://brandfood.net/wp-content/uploads/2021/08/tomlenaya-grudinka-1.jpeg',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 15,
        name: 'Forel na grile, tomaty, veşenki, nut, kaimak',
        price: 5700,
        image: 'https://akulovka.com/wa-data/public/blog/img/mini-forel-na-grile-retsepty-v-domashnikh-usloviyakh.jpg',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 16,
        name: 'Tomlenye şechki konä, püre\n' +
            'iz baklajana, gribnoe ragu',
        price: 5700,
        image: 'https://delback.pinskiy.co/storage/upload/images/WISEYizTY1GnSQxt9KUTmgH2FwEzO6j58krebwRQ.jpg',
        category:{
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 17,
        name: 'Uigurski sup iz pechenyh tomatov,\n' +
            'domaşnäia lapşa, konina',
        price: 3300,
        image: 'https://ic.pics.livejournal.com/ktaara/12013208/375641/375641_600.jpg',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 18,
        name: 'AUYL achichuk, kopchennaia paprika,\n' +
            'välenaia konina\n',
        price: 3900,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmd76UpcwGCAMFEstlCd9balEPbLs0T7HJhKSQjSziyg&s',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 19,
        name: 'Almatinskie krevetki, lazjan, tomatnaia\n' +
            'sälsa',
        price: 8900,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV5NHOF23a5KspJVb1dHO2CwToZgAX9nWgtgbWUgZLw&s',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    },
    {
        id: 20,
        name: 'Pechenyi kartofel,\n' +
            'suluguni, kaimak ',
        price: 2400,
        image: 'https://img1.russianfood.com/dycontent/images_upl/359/big_358179.jpg',
        category: {
            id:3,
            name: "Soup",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nK55bX6_aCTc4VRAjeu2s0QP5p0XofuJJOILTtYcMg&s'
        },
        status: true,
        description: "qwe"
    }
];