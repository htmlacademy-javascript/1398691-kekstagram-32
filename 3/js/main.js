const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSEGE_MIN_COUNT = 1;
const MESSEGE_MAX_COUNT = 2;

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Побольше бы таких людей как ты, и мир стал бы лучше',
  'С такой фигурой можно смело идти за Оскаром',
  'Самый главный промах в моей жизни, что мы не были знакомы раньше',
  'Ты словно с королевской семьи. Сразу видно вежливость и статность фигуры, которые привлекают особое внимание!',
  'С тобой все намного веселее',
  'Кто-нибудь позвоните пожарным, потому что этот пост',
  'Именно ради такого контента я подписывался на тебя',
  'Спасибо, что порадовали мир этим селфи',
  'Пришел, увидел, забыл, что хотел'
];

const NAME = [
  'Арсений', 'Мария', 'Ксения', 'Сергей', 'Карина', 'Вадим', 'Александр'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(MESSEGE_MIN_COUNT, MESSEGE_MAX_COUNT)},
  () => getRandomArrayElement(COMMENT_LINES)
);

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)},
    createComment
  )
});

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1)
);

getPictures();
