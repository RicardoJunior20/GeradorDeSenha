// Seleção de elementos do DOM
const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

// Conjunto de caracteres para gerar a senha
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!!@#$%¨&*()_+{`}^>:<.;,~][´-=9';
let novaSenha = '';

// Atualiza o valor exibido do tamanho da senha conforme o slider é ajustado
sizePassword.textContent = sliderElement.value;
sliderElement.oninput = () => sizePassword.textContent = sliderElement.value;

// Função para gerar a senha
const generatePassword = () => {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass);
  containerPassword.classList.remove("hide");
  password.textContent = pass;
  novaSenha = pass;
}

// Função para copiar a senha para a área de transferência
const copyPassword = async () => {
  try {
    await navigator.clipboard.writeText(novaSenha);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Senha copiada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
  } catch (err) {
    console.error("Erro ao copiar a senha: ", err);
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Não foi possível copiar a senha.',
    });
  }
}

// Evento de clique para gerar a senha
buttonElement.addEventListener("click", generatePassword);

// Evento de clique para copiar a senha
containerPassword.addEventListener("click", copyPassword);
