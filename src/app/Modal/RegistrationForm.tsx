'use client'
import { useState,FormEvent } from "react";

export default function RegistrationForm(){
    const[formData, setFormData] = useState({
        fullName:'',
        email:'',
        phone:'',
        courseOfInterest:'',
        message:'',
    });
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');


    try {
      // Simulação de uma chamada de API
      // Substitua esta lógica pela sua própria, como enviar os dados para um endpoint de API.
      console.log('Dados do formulário:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula o tempo de resposta do servidor

      setSubmitMessage('Cadastro realizado com sucesso! Em breve entraremos em contato.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        courseOfInterest: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Formulário de Inscrição</h2>
      <p className="text-gray-600">Preencha o formulário para se pré-inscrever em um de nossos cursos.</p>

      {/* Campo Nome Completo */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      {/* Campo Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      {/* Campo Curso de Interesse (select) */}
      <div>
        <label htmlFor="courseOfInterest" className="block text-sm font-medium text-gray-700">
          Curso de Interesse
        </label>
        <select
          id="courseOfInterest"
          name="courseOfInterest"
          value={formData.courseOfInterest}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black"
        >
          <option value="">Selecione a área do curso..</option>
          <option value="Áre da Saúde">Área da Saúde</option>
          <option value="Área de Administração e Gestão">Área de Administração e Gestão</option>
          <option value="Área de TRecnoloiga e Informática">Área de TRecnoloiga e Informática</option>
          <option value="Área de Engenharia e Manutenção">Área de Engenharia e Manutenção</option>
          <option value="Área de Construção e Infraestrutura">Área de Construção e Infraestrutura</option>
          <option value="Área do Meio Ambiente e Agorpecuária">Área do Meio Ambiente e Agorpecuária</option>
          <option value="Área de Serviços">Área de Serviços</option>
        </select>
      </div>

      {/* Campo Mensagem (opcional) */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-black"
        ></textarea>
      </div>

      {/* Botão de Envio */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Inscrição'}
      </button>

      {/* Mensagem de sucesso ou erro */}
      {submitMessage && (
        <p className={`mt-4 text-center ${submitMessage.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
}
