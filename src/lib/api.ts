

// Tipagem dos dados do formulário
export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  courseOfInterest: string;
  message: string;
}

const API_ENDPOINT = ''; // Substituir pelo endpoint real da  API

/**
 
 * @param formData 
 * @returns 
 */
export async function registerUser(formData: RegistrationFormData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Se a resposta não for OK, lança um erro com a mensagem da API
      const errorData = await response.json();
      throw new Error(errorData.message || 'Falha ao enviar os dados.');
    }

    // Retorna a resposta da API em formato JSON
    return await response.json();
  } catch (error) {
    // Captura erros de rede
    console.error('Erro na requisição da API:', error);
    throw new Error('Erro de conexão. Verifique sua rede.');
  }
}