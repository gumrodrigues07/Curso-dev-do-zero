
// Descobre quem é o butão
let butao = document.querySelector(".gerar")
let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"
let blococod = document.querySelector(".bloco-cod")
let resultcod = document.querySelector(".result-cod")

//crio função que será chamada quando botão for clickado
async function gerarcodigo() {

    let usertxt = document.querySelector(".caixatxt").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": "bearer " + chave
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda somente com código puro. Nunca use crases, markdown ou explicações. Formato: primeiro <style> com o css, depois o HTML. Siga EXATAMENTE o que o usuário pedir, se pedir algo quicando, use translateY no @Keyframes. Se pedir algo girando, use o rotate."
                },
                {
                    role: "user",
                    content: usertxt
                }
            ]
        })
    })

    let dados = await resposta.json()
    let result = dados.choices[0].message.content

    blococod.textContent = result
    resultcod.srcdoc = result

}

// Ficar de olho no butão quando clicar pra chamar o codigo
butao.addEventListener("click", gerarcodigo)

console.log(butao, gerarcodigo)


