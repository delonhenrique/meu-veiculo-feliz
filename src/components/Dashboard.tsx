import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardProps {
  onNavigateToVehicleRegister: () => void;
  onLogout: () => void;
}

const Dashboard = ({ onNavigateToVehicleRegister, onLogout }: DashboardProps) => {
  const [vehicles] = useState([
    {
      id: 1,
      placa: "ABC-1234",
      marca: "Toyota",
      modelo: "Corolla",
      ano: "2020",
      cor: "Branco"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Meus Veículos
            </h1>
            <p className="text-white/80 text-sm">
              Gerencie seus veículos cadastrados
            </p>
          </div>
          
          <Button
            onClick={onLogout}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sair
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Quick Actions */}
        <Card className="bg-gradient-card shadow-strong border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Ações Rápidas
            </CardTitle>
            <CardDescription>
              O que você gostaria de fazer?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={onNavigateToVehicleRegister}
              className="w-full h-12 bg-gradient-secondary hover:opacity-90 transform hover:scale-[1.02] transition-all shadow-medium font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Cadastrar Novo Veículo
            </Button>
          </CardContent>
        </Card>

        {/* Vehicles List */}
        <Card className="bg-gradient-card shadow-strong border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Veículos Cadastrados
            </CardTitle>
            <CardDescription>
              {vehicles.length === 0 
                ? "Nenhum veículo cadastrado ainda"
                : `${vehicles.length} veículo(s) cadastrado(s)`
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {vehicles.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-4">
                  Você ainda não cadastrou nenhum veículo
                </p>
                <Button
                  onClick={onNavigateToVehicleRegister}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Cadastrar Primeiro Veículo
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-background/50 rounded-lg p-4 border border-border/50 hover:shadow-soft transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-lg">
                            {vehicle.placa}
                          </span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {vehicle.cor}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {vehicle.marca} {vehicle.modelo} • {vehicle.ano}
                        </p>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;