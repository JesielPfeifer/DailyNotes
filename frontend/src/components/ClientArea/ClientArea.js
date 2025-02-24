import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import './styles.css'; // Importa os estilos

const ClientArea = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para tratar o envio do formulário
  };

  return (
    <div className="container">
      {/* Conteúdo Principal */}
      {/* Formulário de Cadastro */}
      <Box className="div-container-center">
        <Typography variant="h5" gutterBottom>
          Cadastro de Cliente
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            placeholder="Digite o nome do cliente"
            fullWidth
            margin="normal"
            variant="outlined"
            fil
            slotProps={<PersonIcon />}
          />
          <TextField
            label="Email"
            placeholder="Digite o email do cliente"
            fullWidth
            margin="normal"
            variant="outlined"
            slotProps={<EmailIcon />}
          />
          <TextField
            label="Contato"
            placeholder="Digite o contato do cliente"
            fullWidth
            margin="normal"
            variant="outlined"
            slotProps={<PhoneIcon />}
          />
        </form>
      </Box>

      {/* Ações */}
      <Box className="div-container-right">
        <Typography variant="h5" gutterBottom>
          Ações
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          fullWidth
          style={{ marginBottom: 20 }}
        >
          Salvar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          fullWidth
        >
          Cancelar
        </Button>
      </Box>
    </div>
  );
};

export default ClientArea;
