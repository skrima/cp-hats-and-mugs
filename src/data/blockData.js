import me from '../assets/me.jpeg'
import Stylesheet from 'reactjs-stylesheet'

export default [
    {
        style: Stylesheet.create({
            objectFit: 'contain'
        }),
        id: '1',
        image: me,
        name: 'Benedict',
        role: 'C.E.O.',
        content: `As the CEO of a company in the tea industry, I have to say that 'Hats and Mugs' is one of the most impressive tea sales and services apps I have seen in a long time. Your innovative approach to the industry and your dedication to providing high-quality teas and exceptional customer service is truly impressive.`
    },
    {
        id: '2',
        image: null,
        name: 'Helen',
        content: `I absolutely love using 'Hats and Mugs' to order my tea. The app is user-friendly and the selection of teas is amazing. Thank you for making my tea-drinking experience so enjoyable!`
    },
    {
        id: '3',
        image: null,
        name: 'Peter',
        content: `I appreciate the personalized customer service I received from 'Hats and Mugs'. They really go above and beyond to make sure their customers are happy. Highly recommend!`
    }
]