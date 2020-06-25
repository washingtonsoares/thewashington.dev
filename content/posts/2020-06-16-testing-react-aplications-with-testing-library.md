---
date: 2020-06-20
title: 'Testing React applications with Testing Library'
template: post
thumbnail: '../thumbnails/react.png'
slug: testing-react-applications-with-testing-library
categories:
  - Code
tags:
  - react
  - testing
---
## Coming soon
<!-- 
_TODO :_
- Escrever sobre a importância de escrever testes (linkar com citações de artigos do Kent Beck/Martin Fowler)

- Falar sobre a dor de testar aplicações Front-end

- Fazer uma breve comparação com o Enzyme, citando algumas dores ao usar essa lib para testar


- Falar sobre a mudança de conceito/paradigma que o Testing Library introduz

- Escrever uma aplicação simples e testá-la (colocar exemplos no Codesandbox)

- Citar o Kent C Dodds (blog, Twitter)




## "Better" tests ? 
**What does that mean ? What makes a test good ?**

**Em outras palavras, O que faz um teste ser "bom" ?** Para responder essa pergunta, é necessário primeiro questionar algo que parece básico: **_Porque devemos escrever testes?_**.

Em primeiro lugar, uma das principais razões que se dá pelo fato de que os testes nos dão uma confiança maior de que o software (ainda) funciona como esperado. Essa segurança ainda se estende quando é necessário fazer uma manutenção, no qual os testes nos dão os primeiros "sinais de fumaça" que algo pode estar errado. Existem outras inúmeras razões do porque escrever testes, e como dica pessoal eu indico ler [este artigo do Kent Beck](https://medium.com/@kentbeck_7670/programmer-test-principles-d01c064d7934).

Porém, **não** é interessante que os testes exijam:
- Grande curva de aprendizado;
- Muito esforço para escrever e executar;
- Esforço para manter

#### Em resumo, bons testes são aqueles que nos dão uma boa confiança, sem ter uma grande curva de aprendizado e que não tenham muito esforço para escrever, executar e manter.

Então, vamos à um exemplo do que **NÃO** seria um teste bom (na minha opinião), e depois veremos como o Testing Library talvez possa nos ajudar a escrever um teste melhor.

```javascript
it('renders a button in size of "small" with a text on it', () => {
  const wrapper = shallow(
    <Button size="small" text="Join us" />
  );

  expect(wrapper.find('button').prop('size')).toBe('small');
  expect(wrapper.find('button').prop('text')).toBe('Join us');
});
```
#### Você deve estar se perguntando, mas o que tem de errado neste teste ? Porque é um teste "ruim" ?

I can easily break this test by refactoring the component, even if the component did not changed it's behavior. (continua se comportando como deveria).


> **Note**: procurar uma definição a partir da documentação/site do Kent

The Testing Library is a very light-weight solution for testing React components. Its provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. It's primary guiding principle is:

![Kent talking about test confidence](../images/kent-twitter-post-test-confidence.png)
[https://kentcdodds.com/blog/introducing-the-react-testing-library/](https://kentcdodds.com/blog/introducing-the-react-testing-library/)


Em poucas palavras, a Testing Library provê algumas formas de fazer [`Queries`](https://testing-library.com/docs/dom-testing-library/api-queries) com os elementos da árvore DOM. Também vale lembrar do [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom#table-of-contents), que fornece um conjunto de asserções personalizados do Jest. Isso ajuda a tornar seus testes mais declarativos, claros para leitura e manutenção.

```jsx
  // Link Component
  const Link = () => (
    <a href="/about">About ℹ️</a>
  )

  // Link.test.js
  import { render } from '@testing-library/react'

  const { getByText } = render(<Link />)
  expect(getByText(/about/i)).toBeInTheDocument();
```

## Conclusion -->
