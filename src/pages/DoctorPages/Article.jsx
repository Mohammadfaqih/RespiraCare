// File: components/doctorsComponents/Article.js
import React, { useState } from 'react';
import ArticleMain from '../../assets/components/doctorsComponents/Article';
import FormTambahArtikel from '../../assets/components/doctorsComponents/FormTambahArtikel';
import ArticleHistory from '../../assets/components/doctorsComponents/ArticleHistory';
import ArticleRead from '../../assets/components/doctorsComponents/ArticleRead';
import EditArticle from '../../assets/components/doctorsComponents/EditArticle';

const Article = () => {
  const [activeComponent, setActiveComponent] = useState('main');

  // Fungsi navigasi
  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'main':
        return <ArticleMain onNavigate={handleNavigation} />;
      case 'tambah':
        return <FormTambahArtikel onNavigate={handleNavigation} />;
      case 'histori':
        return <ArticleHistory onNavigate={handleNavigation} />;
      case 'read':
        return <ArticleRead onNavigate={handleNavigation} />;
      case 'edit':
        return <EditArticle onNavigate={handleNavigation} />;
      default:
        return <ArticleMain onNavigate={handleNavigation} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Article;
