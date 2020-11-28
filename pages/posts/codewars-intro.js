import { ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import {
	Box,
	Code,
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
		<Box as="main" bg="#F7FAFC">
			<Box maxW="1080px" px="8" mx="auto" pb="16" boxShadow="lg" bg="white">
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

				<Box pt="5">
					<NextLink href="/">
						<Link>На главную</Link>
					</NextLink>
				</Box>

				<Heading as="h1" marginY={7} size="2xl" textAlign="center">
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
						width="848px"
						height="621px"
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

				<Box maxW="800px" mx="auto">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/codewars-intro.gif"
						width="1097px"
						height="570px"
						alt="Пример прохождения тестовой задачи"
					/>
				</Box>

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
						width="1506px"
						height="474px"
						alt="Главная странца Codewars"
					/>
				</Box>

				<Text>
					Итак, нажали на <b>Kata</b> и появляется страница с задачами:
				</Text>

				<Box maxW="800px" mx="auto" mb="10">
					<Image
						src="https://480402.selcdn.ru/links/posts/codewars-intro/Untitled.jpg"
						width="1120px"
						height="695px"
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
						width="1125px"
						height="673px"
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
			</Box>
		</Box>
	);
}
