import { ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import {
	Box,
	Code,
	Container,
	Heading,
	Link,
	List,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodewarsIntro() {
	const codeColor = "teal";

	return (
		<Container as="main" maxW="960px" px={{ base: 5, md: 8 }} py="10">
			<Head>
				<title>Codewars: обзор и рекомендации</title>
				<meta
					name="description"
					content="Codewars - это отличное место, где можно отточить основы программирования и повысить уровень решения задач. В этой статье я расскажу всё необходимое, чтобы чувствовать себя уверенее, работая с этим сайтом."
				></meta>
				<meta
					property="og:title"
					content="Codewars: обзор и рекомендации"
				></meta>
				<meta
					property="og:description"
					content="Codewars - это отличное место, где можно отточить основы программирования и повысить уровень решения задач. В этой статье я расскажу всё необходимое, чтобы чувствовать себя уверенее, работая с этим сайтом."
				></meta>
				<meta property="og:type" content="article"></meta>
			</Head>
			<Box as="article">
				{/*<Box>
					<NextLink href="/">
						<Link>На главную</Link>
					</NextLink>
				</Box>
				*/}
				<Heading as="h1" mb={14} size="2xl" textAlign="center">
					Codewars: обзор и рекомендации
				</Heading>
				<Text>
					Когда вы выбрали для себя основной язык программирования, то
					необходимо закрепить его основы: синтаксис, встроенные методы,
					принципы программирования в целом. Для этого лучше всего, на мой
					взгляд подходит решение задач.
				</Text>
				<Text>
					Конечно, это может звучать не так весело, но на практике - очень
					действенный способ. Кто-то может подумать, что “задачи - это не моё”.
					Но программирование - это и есть решение одной проблемы за другой с
					помощью написания алгоритмов, используя синтаксис конкретного языка.
					Если вы не захотите изменить свое мнение относительно решения задач,
					возможно вам не стоит заниматься программированием.
				</Text>
				<Text>
					Есть множество сайтов, где можно попрактиковаться в решении задач, но
					здесь я расскажу о{" "}
					<Link href="https://codewars.com" isExternal>
						codewars.com <ExternalLinkIcon mx="2px" />
					</Link>
					. Стоит сразу отметить, что он англоязычный и все описания задач
					соответсвенно на английском. У меня есть идея создать репозиторий с
					переводами самых популярных задач, но это в случае, если будет много
					желающих.
				</Text>
				<Heading as="h2" size="lg" mt={10}>
					Регистрация
				</Heading>
				<Text>
					Впервые попав на этот сайт, вам предлагают пройти небольшое задание.
					(Хотя, я не уверен, возможно его можно обойти.)
				</Text>
				<Box maxW="800px" mx="auto">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(1).jpg"
						width="800px"
						height="476px"
						alt="Приветственная страница Codewars"
					/>
				</Box>
				<Text mt={7}>
					Я выбираю <Code colorScheme={codeColor}>JavaScript</Code>. Появляется
					окно, где мне предлагается выяснить, почему представленный код не
					работает должным образом.
				</Text>
				<Box maxW="800px" mx="auto">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(2).jpg"
						width={848}
						height={621}
						alt="Тестовая задача"
					/>
				</Box>
				<Text mt={7}>
					В этом коде мы видим функцию{" "}
					<Code colorScheme={codeColor}>multiply</Code>, суть которой умножить
					два числа друг на друга. В <b>JavaScript</b>, чтобы функция возвращала
					какой-то результат, должно использоваться ключевое слово{" "}
					<Code colorScheme={codeColor}>return</Code>.
				</Text>
				<SyntaxHighlighter
					customStyle={{
						padding: "20px",
					}}
					showLineNumbers
					language="javascript"
					style={gruvboxDark}
				>
					{`function multiply(a, b) {
	return a * b;
}`}
				</SyntaxHighlighter>
				<Text mt={7}>
					После того, как я исправил код, я нажимаю <b>Submit</b> для запуска
					тестов. Итак, мой код прошел все тесты и далее предлагается завести
					учетную запись или подключить свой <b>GitHub</b> аккаунт.
				</Text>

				<Box
					mt={7}
					bg="cyan.50"
					borderLeft="5px"
					borderColor="red.300"
					borderStyle="solid"
					pl="20px"
					pr="10px"
					py="10px"
				>
					<Text mb={0}>
						(Если у вас еще нет аккаунта на{" "}
						<Link href="https://github.com" isExternal>
							<b>GitHub</b> <ExternalLinkIcon mx="2px" />
						</Link>
						, очень рекомендую завести, поскольку вам не нужно будет
						впоследствии постоянно регистрироваться на подобных сайтах -
						достаточно просто войти под учетной записи GitHub.)
					</Text>
				</Box>
				<Text mt={7}>
					По сути, это задание является наглядной демонстрацией (в упрощенном
					варианте), как происходит решение задач на сайте <b>Codewars</b>. Но я
					расскажу еще немного подробнее.
				</Text>
				<Heading as="h2" size="lg" mt={10}>
					Интерфейс
				</Heading>
				<Text>
					Итак, войдя под своей учетной записью вы попадаете на страницу, где
					вам будет предложена следующая задача для решения. Но лучше перейти к
					списку всех задач и выбрать для себя подходящие. В панели слева
					нажмите на Kata. Слово “ката” взято из восточных боевых искусств и в
					данном случае употребляется как{" "}
					<em>
						упражнение в программировании, повышающее навыки программиста через
						практику и повторение
					</em>
					.
				</Text>
				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(3).jpg"
						width={1506}
						height={474}
						alt="Главная странца Codewars"
					/>
				</Box>
				<Text>
					Итак, нажали на <b>Kata</b> и появляется страница с задачами:
				</Text>
				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Untitled.jpg"
						width={1120}
						height={695}
						alt="Страница с задачи"
					/>
				</Box>
				<Text>
					По умолчанию здесь собраны последние каты. В разделе <b>Diffuculty</b>{" "}
					вы можете выбрать для себя подходящий уровень сложности. Всего 8
					уровней. 8 kyu - самый простой и 1 kyu самый сложный. Термин{" "}
					<b>kyu</b> (кю) - также взят из карате и означает сколько степеней еще
					осталось до мастера (1 dan).
				</Text>
				<Text>
					Если вы начинающий, то для начала решайте на сложности 8 kyu. После
					того, как вы освоитесь на этом сайте и 8 kyu задачи покажутся легкими,
					рекомендую сделать следующую настройку отображения задач:
				</Text>
				<UnorderedList pl="5" mb="10">
					<ListItem>
						<b>Sort by:</b> Most Completed (наиболее решенные)
					</ListItem>
					<ListItem>
						<b>Language:</b> My Languages
					</ListItem>
					<ListItem>
						<b>Status:</b> Approved
					</ListItem>
					<ListItem>
						<b>Progress:</b> Kata I have not trained on (Каты, которые я не
						решал)
					</ListItem>
					<ListItem>
						<b>Difficulty:</b> All - сложность любая
					</ListItem>
				</UnorderedList>
				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(15).jpg"
						width={1125}
						height={673}
						alt="Пример применения фильтра для поиска простых задач"
					/>
				</Box>
				<Text>
					Добавьте эту страницу в закладки. Так не придется каждый раз
					выставлять эти настройки и всегда будет предложена актуальная для вас
					задача.
				</Text>
				<Text>
					Решать задачи, с которыми справились большинство участников - это
					почти гарантия, что в ней отсутствуют недочеты, а также то, что вы её
					скорее всего решите сами, и как следствие - захотите ещё.
				</Text>
				<Text>
					Нажав на заголовок задачи, вы попадете на страницу с её описанием:
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(6).jpg"
						width={1123}
						height={742}
						alt="Страница с описанием задачи"
					/>
				</Box>
				<OrderedList pl="5" mb="10">
					<ListItem>Здесь дается описание и примеры.</ListItem>
					<ListItem>
						Если готовы приступить, нажмите кнопку <b>TRAIN</b>.
					</ListItem>
					<ListItem>Язык программирования, выбранный для этой задачи.</ListItem>
					<ListItem>
						Во вкладке <b>Solutions</b> можно подсмотреть решения, но тогда вам
						не засчитают очки.
					</ListItem>
					<ListItem>
						Задачу можно добавить в избранное, чтобы решить её позже, нажав на
						звездочку.
					</ListItem>
				</OrderedList>

				<Text>
					Нажав на кнопку <b>TRAIN</b> появится следующее окно:
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(7).jpg"
						width={1123}
						height={742}
						alt="Страница задачи"
					/>
				</Box>

				<OrderedList pl="5" mb="10">
					<ListItem>Здесь также присутствует описание.</ListItem>
					<ListItem>В этом окне нужно вставить свое решение.</ListItem>
					<ListItem>
						Здесь представлена часть тестов, через которые будет проходить ваше
						решение.
					</ListItem>
					<ListItem>
						<b>RUN SAMPLE TESTS</b> запускает тесты, упомянутые в пункте 3.
					</ListItem>
					<ListItem>
						<b>ATTEMPT</b> - запускает все тесты. Их может быть 100 и больше. Я
						всегда нажимаю сразу на эту кнопку, потому что я могу пройти тесты
						из пункта 3, но не пройти случайные тесты, так что смысла в{" "}
						<b>RUN SAMPLE TESTS</b> практически нет.
					</ListItem>
				</OrderedList>

				<Text>
					Писать код можно прямо на месте (в окне, помеченным номером 2) и тут
					же его проверять, но я предпочитаю делать это в стороннем сервисе,
					таком как{" "}
					<Link href="https://repl.it" isExternal>
						repl.it <ExternalLinkIcon mx="2px" />
					</Link>{" "}
					(онлайн редактор кода). Это связано с тем, что когда на работе
					выпадает свободная минутка и я могу порешать задачку, такие сервисы,
					как repl.it - это быстро и удобно.
				</Text>

				<Text>
					Итак, вы нашли решение, вставили его в нужное окно и нажали{" "}
					<b>ATTEMPT</b>.
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(8).jpg"
						width={1139}
						height={938}
						alt="Проверка решения"
					/>
				</Box>

				<OrderedList pl="5" mb="10">
					<ListItem>В данном случае - мое решение.</ListItem>
					<ListItem>
						Показывается количество пройденных тестов. Когда все тесты
						подсвечены зеленым цветом, это значит, что они пройдены. Если
						красным, то не пройдены.
					</ListItem>
					<ListItem>
						Сообщение о том, что вы еще можете сделать рефакторинг или добавить
						комментарии к коду.
					</ListItem>
					<ListItem>
						Нажав на <b>SUBMIT FINAL</b> вы отправляете финальную версию вашего
						решения, которое увидят остальные участники сайта.
					</ListItem>
				</OrderedList>
				<Text>
					После окончательного подтверждения своего кода, откроется окно с
					решениями остальных участников. Первыми идут самые популярные, с
					высоким рейтингом. Сразу хочу предупредить, что чаще всего в первых
					рядах будут решения длинною в несколько строк. Это больше выглядит на
					шифр, который иногда трудно разобрать. Пусть такие решения не наводят
					вас на мысль, что вы, наверное, плохой программист. Поначалу вы можете
					просто не знать какие-то встроенные методы или регулярные выражения,
					которые сильно сокращают код. Попробуйте разобраться хотя бы с одним
					таким “умным” кодом и решить задачу еще раз, но уже с новыми знаниями.
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(10).jpg"
						width={1065}
						height={924}
						alt="Страница других решений"
					/>
				</Box>

				<OrderedList pl="5" mb="10">
					<ListItem>
						Самое популярное решение. В принципе, очень схожее с моим.
					</ListItem>
					<ListItem>
						“Умное” решение. Как видно, его понять несколько сложнее, чем пример
						выше.
					</ListItem>
					<ListItem>
						Можно поднимать репутацию решения, как “Лучшие практики”, если вы
						находите их таковыми. Но здесь это довольно спорно и не всегда
						объективно. Например, 419 человек отметили, что решение
						придерживается лучших практик написания кода. Но в нем отсутствует,
						например, проверка на тип введенных данных пользователем. Если он
						введет вместо числа какое-нибудь слово, то код уже не будет
						работать. Напомню, что в данном случае речь идет о <b>JavaScript</b>
						.
					</ListItem>
					<ListItem>
						Или можно отметить решение, как “Умное”. Но я уже выше писал про
						“умный” код - пусть он вас не подавляет, но учит.
					</ListItem>
				</OrderedList>

				<Heading as="h2" size="lg" mt={10}>
					Статистика
				</Heading>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(13).jpg"
						width={863}
						height={340}
						alt="Верхняя панель"
					/>
				</Box>

				<Text>В правом верхнем углу вы можете увидеть:</Text>

				<OrderedList pl="5" mb="10">
					<ListItem>Сохраненные в избранное задачки.</ListItem>
					<ListItem>
						Уведомления, которые будут появляться крайне редко.
					</ListItem>
					<ListItem>
						Текущий разряд. 8 кю самый низкий, 1 кю - самый высокий, а после 1
						кю идут 1 - 4 дан, это уже мастера.
					</ListItem>
					<ListItem>
						Очки репутации. Они даются за каждую решенную задачу, а также
						некоторые действия в сообществе. Чем больше очков, тем больше у вас
						привилегий, которыми вы пользоваться скорее всего не будете.
						Например, скрывать самостоятельно комментарии, если они содержат
						спойлер.
					</ListItem>
				</OrderedList>

				<Text>
					Перейдя в профиль можно ознакомиться со статистикой поподробнее:
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Screenshot_(14).jpg"
						width={1037}
						height={469}
						alt="Страница статистики"
					/>
				</Box>

				<OrderedList pl="5" mb="10">
					<ListItem>Разряд.</ListItem>
					<ListItem>Очки репутации.</ListItem>
					<ListItem>Позиция в рейтинговой таблице</ListItem>
					<ListItem>
						Процентный показатель репутации относительно других участников.
					</ListItem>
					<ListItem>Общее количество выполненных задач</ListItem>
					<ListItem>
						Визуальное представление сколько еще осталось до следующего разряда.
						В моем случае я прошел только 15,2%.
					</ListItem>
				</OrderedList>

				<Text>
					Несколько слов о рейтинге. Несмотря на то, что на данный момент у меня
					4 kyu, фактически я не могу еще решать задачи с таким же уровнем
					сложности. Более менее комфортно я себя чувствую на задачах уровня 6
					kyu. 5 kyu уже заставляют меня поломать голову, но еще вполне могу
					решить. Как же так получилось, что у меня 4 разряд? Дело в том, что
					системе не важно, какой сложности задачи вы решаете. Главное -
					количество. Было бы логичнее, если бы прогресс учитывался при решении
					конкретных задач. Например, если я решил 30 задач 6 kyu, мне
					присваивают 6 разряд. А так, решая задачи только для 8 разряда вы
					получите 6-й. Просто это будет дольше. Чем ниже сложность задачи, тем
					меньше очков она дает.
				</Text>

				<Text>
					Однако, цифра позиции в рейтинговой таблице куда интереснее. Глядя на
					нее вы можете вспомнить, как занимали ~234,567 место, но своими
					стараниями обогнали большинство участников этого сайта.
				</Text>

				<Text>
					Напоследок, хочу посоветовать никогда не подсматривать ответы до того,
					как найти своё решение. Даже если несколько часов у вас ничего не
					получается, ответ может прийти завтра. И пусть ваш код не будет
					элегантным и коротким, но зато вы нашли нужный алгоритм самостоятельно
					и повысили свой уровень решения задач. А это самое главное. Сделать
					рефакторинг кода никогда не будет поздно. Игнорируйте мысли о том ,что
					всё должно быть идеально с самого начала. Особенно интересно
					получается, когда вы видите другое хорошее решение, в этот момент
					новая информация закрепляется намного эффективнее, чем, если бы узнали
					её не промучившись целый день над своим решением.
				</Text>

				<Text>
					Также, берите задачи, которые вам больше нравятся. К примеру, я
					пропускаю математические задачи, потому что даже не понимаю о чем в
					них речь вообще. Это касается не только математических задач - иногда
					описание бывает очень плохим. В этом случае может быть полезным
					почитать дискуссию, где, возможно кто-то оставил более понятное
					объяснение.
				</Text>

				<Text>Успехов!</Text>
			</Box>
		</Container>
	);
}
