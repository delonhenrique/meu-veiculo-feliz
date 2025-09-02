// Validações brasileiras para CPF, placa, RENAVAM, etc.

export const validateCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  const cleanCPF = cpf.replace(/\D/g, '');
  
  // Verifica se tem 11 dígitos
  if (cleanCPF.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
  
  // Valida primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF[i]) * (10 - i);
  }
  let remainder = sum % 11;
  let digit1 = remainder < 2 ? 0 : 11 - remainder;
  
  if (parseInt(cleanCPF[9]) !== digit1) return false;
  
  // Valida segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF[i]) * (11 - i);
  }
  remainder = sum % 11;
  let digit2 = remainder < 2 ? 0 : 11 - remainder;
  
  return parseInt(cleanCPF[10]) === digit2;
};

export const validatePlaca = (placa: string): boolean => {
  // Remove espaços e converte para maiúsculo
  const cleanPlaca = placa.replace(/\s/g, '').toUpperCase();
  
  // Formato antigo: ABC1234
  const oldFormat = /^[A-Z]{3}\d{4}$/;
  // Formato Mercosul: ABC1D23
  const mercosulFormat = /^[A-Z]{3}\d[A-Z]\d{2}$/;
  
  return oldFormat.test(cleanPlaca) || mercosulFormat.test(cleanPlaca);
};

export const validateRENAVAM = (renavam: string): boolean => {
  // Remove caracteres não numéricos
  const cleanRENAVAM = renavam.replace(/\D/g, '');
  
  // RENAVAM deve ter 11 dígitos
  if (cleanRENAVAM.length !== 11) return false;
  
  // Sequência para cálculo do dígito verificador
  const sequence = '3298765432';
  let sum = 0;
  
  // Calcula a soma ponderada dos 10 primeiros dígitos
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanRENAVAM[i]) * parseInt(sequence[i]);
  }
  
  // Calcula o dígito verificador
  const remainder = sum % 11;
  const digit = remainder === 0 || remainder === 1 ? 0 : 11 - remainder;
  
  return parseInt(cleanRENAVAM[10]) === digit;
};

export const validatePhone = (phone: string): boolean => {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Celular brasileiro: 11 dígitos (com DDD)
  return cleanPhone.length === 11 && /^[1-9]\d{10}$/.test(cleanPhone);
};

// Máscaras para formatação
export const formatCPF = (cpf: string): string => {
  const cleanCPF = cpf.replace(/\D/g, '');
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export const formatPlaca = (placa: string): string => {
  const cleanPlaca = placa.replace(/\s/g, '').toUpperCase();
  
  // Formato Mercosul: ABC1D23
  if (/^[A-Z]{3}\d[A-Z]\d{2}$/.test(cleanPlaca)) {
    return cleanPlaca.replace(/([A-Z]{3})(\d[A-Z]\d{2})/, '$1-$2');
  }
  
  // Formato antigo: ABC1234
  return cleanPlaca.replace(/([A-Z]{3})(\d{4})/, '$1-$2');
};

export const formatRENAVAM = (renavam: string): string => {
  const cleanRENAVAM = renavam.replace(/\D/g, '');
  return cleanRENAVAM.replace(/(\d{4})(\d{3})(\d{4})/, '$1.$2.$3');
};