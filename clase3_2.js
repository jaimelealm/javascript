function procesarAlumnos()
{
for (i=1;i<N;i++)
		{
			nombre=prompt("Nombre "+i+"/"+N+": ");
			esMasculino=confirm("Ees masculo ?");
			if (!esMasculino)
				mujeres++;
			nota = parseInt(prompt("Intr. la nota: "));
			if (isNaN(nota))
					alert("Nota Invalida");
				else
					if (nota>=80)
					{
						if (!esMasculino)
							mujeresAprobadas++;

						alert("Ud Aprobo");
						console.log("Aprobado",i)
						console.log("Mujeres Aprobadas",mujeresAprobadas)
						console.log("Mujeres en el Curso",mujeres)
					}
		}
}