// app\actions\createEmployee.js
export async function createEmployee(formData, userId) {
  try {
    const response = await fetch('/api/employees', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        role: formData.get('role'),
        department: formData.get('department'),
        description: formData.get('description'),
        userId: userId, // Agregar el userId aquí
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || 'Error al agregar el empleado',
        error: errorData.error,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error al conectar con el servidor',
      error: error.message,
    };
  }
}

