import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { validatePlaca, validateRENAVAM, formatPlaca, formatRENAVAM } from "@/lib/validations";

interface VehicleRegisterProps {
  onRegisterSuccess: () => void;
  onBack: () => void;
}

const VehicleRegister = ({ onRegisterSuccess, onBack }: VehicleRegisterProps) => {
  const [formData, setFormData] = useState({
    placa: "",
    renavam: "",
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
    combustivel: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    // Aplicar máscaras durante a digitação
    if (field === 'placa') {
      formattedValue = formatPlaca(value);
    } else if (field === 'renavam') {
      formattedValue = formatRENAVAM(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
  };

  const validateForm = () => {
    if (!validatePlaca(formData.placa)) {
      toast({
        title: "Placa inválida",
        description: "Por favor, informe uma placa válida (ABC-1234 ou ABC1D23).",
        variant: "destructive",
      });
      return false;
    }

    if (!validateRENAVAM(formData.renavam)) {
      toast({
        title: "RENAVAM inválido",
        description: "Por favor, informe um RENAVAM válido.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simula chamada de API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Veículo cadastrado com sucesso!",
        description: "O veículo foi adicionado ao sistema.",
      });
      onRegisterSuccess();
    }, 1500);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card shadow-strong border-0">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-success rounded-full mx-auto flex items-center justify-center shadow-medium">
            <svg
              className="w-8 h-8 text-success-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3M5 19a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2H5z"
              />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold text-success">
            Cadastrar Veículo
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Informe os dados do seu veículo
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="placa" className="text-sm font-medium">
                Placa *
              </Label>
              <Input
                id="placa"
                type="text"
                placeholder="ABC-1234 ou ABC1D23"
                value={formData.placa}
                onChange={(e) => handleInputChange('placa', e.target.value)}
                className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20 uppercase"
                maxLength={8}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="renavam" className="text-sm font-medium">
                RENAVAM *
              </Label>
              <Input
                id="renavam"
                type="text"
                placeholder="1234.567.8901"
                value={formData.renavam}
                onChange={(e) => handleInputChange('renavam', e.target.value)}
                className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20"
                maxLength={13}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marca" className="text-sm font-medium">
                Marca
              </Label>
              <Select onValueChange={(value) => handleInputChange('marca', value)}>
                <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20">
                  <SelectValue placeholder="Selecione a marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="fiat">Fiat</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                  <SelectItem value="hyundai">Hyundai</SelectItem>
                  <SelectItem value="renault">Renault</SelectItem>
                  <SelectItem value="peugeot">Peugeot</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modelo" className="text-sm font-medium">
                Modelo
              </Label>
              <Input
                id="modelo"
                type="text"
                placeholder="Ex: Civic, Corolla, Gol"
                value={formData.modelo}
                onChange={(e) => handleInputChange('modelo', e.target.value)}
                className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ano" className="text-sm font-medium">
                Ano
              </Label>
              <Select onValueChange={(value) => handleInputChange('ano', value)}>
                <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20">
                  <SelectValue placeholder="Selecione o ano" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cor" className="text-sm font-medium">
                Cor
              </Label>
              <Select onValueChange={(value) => handleInputChange('cor', value)}>
                <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20">
                  <SelectValue placeholder="Selecione a cor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branco">Branco</SelectItem>
                  <SelectItem value="preto">Preto</SelectItem>
                  <SelectItem value="prata">Prata</SelectItem>
                  <SelectItem value="cinza">Cinza</SelectItem>
                  <SelectItem value="vermelho">Vermelho</SelectItem>
                  <SelectItem value="azul">Azul</SelectItem>
                  <SelectItem value="verde">Verde</SelectItem>
                  <SelectItem value="amarelo">Amarelo</SelectItem>
                  <SelectItem value="marrom">Marrom</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="combustivel" className="text-sm font-medium">
                Combustível
              </Label>
              <Select onValueChange={(value) => handleInputChange('combustivel', value)}>
                <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-success focus:ring-success/20">
                  <SelectValue placeholder="Selecione o combustível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex">Flex (Álcool/Gasolina)</SelectItem>
                  <SelectItem value="gasolina">Gasolina</SelectItem>
                  <SelectItem value="alcool">Álcool</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="eletrico">Elétrico</SelectItem>
                  <SelectItem value="hibrido">Híbrido</SelectItem>
                  <SelectItem value="gnv">GNV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full h-12 bg-success hover:opacity-90 transform hover:scale-[1.02] transition-all shadow-medium font-semibold text-success-foreground"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-success-foreground/30 border-t-success-foreground rounded-full animate-spin" />
                  <span>Cadastrando...</span>
                </div>
              ) : (
                "Cadastrar Veículo"
              )}
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              Voltar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default VehicleRegister;