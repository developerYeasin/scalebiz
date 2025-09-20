"use client";

import React from 'react';
import Select from 'react-select';

const ReactSelectMulti = ({ options, value, onChange, placeholder, loading }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'hsl(var(--background))',
      borderColor: state.isFocused ? 'hsl(var(--ring))' : 'hsl(var(--border))',
      boxShadow: state.isFocused ? `0 0 0 1px hsl(var(--ring))` : 'none',
      '&:hover': {
        borderColor: 'hsl(var(--ring))',
      },
      color: 'hsl(var(--foreground))',
      minHeight: '40px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'hsl(var(--background))',
      zIndex: 50,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'hsl(var(--primary))'
        : state.isFocused
        ? 'hsl(var(--accent))'
        : 'hsl(var(--background))',
      color: state.isSelected ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
      '&:active': {
        backgroundColor: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'hsl(var(--secondary))',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'hsl(var(--secondary-foreground))',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'hsl(var(--secondary-foreground))',
      '&:hover': {
        backgroundColor: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'hsl(var(--muted-foreground))',
    }),
    input: (provided) => ({
        ...provided,
        color: 'hsl(var(--foreground))',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'hsl(var(--foreground))',
    }),
  };

  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isLoading={loading}
      styles={customStyles}
      closeMenuOnSelect={false}
    />
  );
};

export default ReactSelectMulti;