import profileImage from '../assets/profile_image.jpeg'
import logoImage from '../assets/red_tree_logo.png'
import bethanyThumb from '../assets/review_house_bethany.png'
import pucThumb from '../assets/review_house_puc.png'
import sturmThumb from '../assets/review_house_sturm.png'

export const profile = {
  name: 'Alex Reinig',
  title: 'PRESIDENT',
  bio: 'I know mortgages! 22 years helping families finance their dream homes.',
  profileImage,
  logoImage,
  phone: { display: '(412) 889-3310', tel: '+14128893310' },
  email: 'Alex@RedTreeMtg.com',
  website: { display: 'www.redtreemtg.com', url: 'https://www.redtreemtg.com' },
  instagram: 'https://www.instagram.com/alexreinig/',
  applyUrl: 'https://2823976.my1003app.com',
  reviewsUrl:
    'https://www.google.com/search?q=red+tree+mortgage+reviews&sca_esv=d51e216af84ce14e&source=hp&ei=vUFearztIs_n5NoPnKTgOQ&iflsig=ABILxe8AAAAAal5PzavSVe5ayS_7C3WGL8E0TeRjC8fp&ved=0ahUKEwj8v_v0y-GVAxXPM1kFHRwSOAcQ4dUDCCE&uact=5&oq=red+tree+mortgage+reviews&gs_lp=Egdnd3Mtd2l6IhlyZWQgdHJlZSBtb3J0Z2FnZSByZXZpZXdzMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wVI6gJQAFgAcAB4AJABAJgBZaABZaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACa5gDAJIHAzAuMaAHsgOyBwMwLjG4B2vCBwMyLTHIBwOACAE&sclient=gws-wiz&sei=v0Feaq7pBJCsiLMP8LvDiA0#lrd=0x88345d81baa6aaab:0xacd9d9278dde1b06,1',
  company: {
    name: 'Red Tree Mortgage',
    nmlsNumbers: ['584809', '2823976'],
  },
  rating: 5.0,
  reviews: [
    {
      quote:
        'We contacted Alex to help us prepare to move from out of state. We saw a tempting promotion from a large mortgage company, but we wanted to work with someone local if they could match it. Not only was Alex able to match it; he was able to beat the rate while offering personalized service. Alex made the process so easy from 1,000 miles away!',
      name: 'Bethany L.',
      rating: 5,
      thumb: bethanyThumb,
    },
    {
      quote:
        'Alex was incredibly knowledgeable and helpful through the purchase of my new house. He helped me make the best decision and was quick to respond. I will be using him again and referring him to everyone I know.',
      name: 'A. Puc',
      rating: 5,
      thumb: pucThumb,
    },
    {
      quote:
        "Alex is top notch. He is very efficient and competent with a hearty network of business relationships that foster the client's awareness and execution through the home purchasing process. We have used Alex twice now and will be sticking with him for any subsequent home purchases or refinances!",
      name: 'N. Sturm',
      rating: 5,
      thumb: sturmThumb,
    },
  ],
}
