import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Botões de navegação principais */}
            <Button
              color="inherit"
              sx={{ marginRight: 2, fontSize: '1rem' }}
              onClick={() => navigate('/')}
            >
              Início
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: 2, fontSize: '1rem' }}
              onClick={() => navigate('/produtos')}
            >
              Produtos
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: 2, fontSize: '1rem' }}
              onClick={() => navigate('/contato')}
            >
              Contato
            </Button>

            {/* Botões de Login e Registrar (menores) */}
            <Button
              color="inherit"
              sx={{ marginRight: 1, fontSize: '0.875rem', paddingX: 2 }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontSize: '0.875rem', paddingX: 2 }}
              onClick={() => navigate('/register')}
            >
              Registrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Conteúdo principal */}
      <Box
        sx={{
          height: 'calc(100vh - 64px)', // 100vh menos a altura do AppBar
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(to bottom right, #3f51b5, #2196f3)',
          color: 'white',
          padding: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo ao Daily Notes
        </Typography>
        <Typography variant="h6" gutterBottom>
          Descubra tudo o que oferecemos e aproveite nossos serviços incríveis!
        </Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
